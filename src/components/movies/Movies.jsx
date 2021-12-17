import React, {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import Form from 'react-bootstrap/Form';

import MovieCard from './movie-card/Movie-Card';
import { getLatest, getSearch }  from '../../services/queries';

import './Movies.scss';


const Movies = () => {
  const [query, setQuery] = useState("");
  useEffect(()=>{
    let mounted = true;
    if (query == "") {
      getLatest(pageNum)
      .then(items => {
        if(mounted) {
          setMovies(items)
        }
      })
    } else {
      getSearch(query, pageNum)
      .then(items => {
        if(mounted) {
          setMovies(items)
        }
      })
    }
    
    return () => mounted = false;
  })
  
  const [pageNum, setPageNum] = useState(1);
  const [movies, setMovies] = useState(null);

  let items = [];

  if (movies) {
    for (let number = Math.max(pageNum-3,1); number <= Math.min(pageNum+3, movies.total_pages); number++) {
      items.push(
        <Pagination.Item key={number} active={number === pageNum} onClick={()=>setPageNum(number)}>
          {number}
        </Pagination.Item>,
      );
    }
  }
  

  return <Container>
      <br/>
      <Form.Control type="text" placeholder="Search" onSubmit={(e)=>e.preventDefault()} onChange={(e)=>setQuery(e.target.value)} />
      <br/>
      <Container bsPrefix="moviesGrid">
          {movies != null ? movies.results.map(movie => <MovieCard key={movie.id} details={movie} />) 
            : <p>Loading</p>}
      </Container>
      
      <Container style={{"display":"flex", "alignContent" : "center"}}>
        <Pagination style={{"margin":"auto"}}>
          <Pagination.First onClick={()=>{setPageNum(1)}}/>
          <Pagination.Prev onClick={()=>{setPageNum(Math.max(pageNum - 1,1))}}/>
          {items}
          <Pagination.Next onClick={()=>{setPageNum(Math.min(pageNum + 1,movies.total_pages))}}/>
          <Pagination.Last onClick={()=>{setPageNum(movies.total_pages)}}/>
        </Pagination>
      </Container>
  </Container>
}

export default Movies;