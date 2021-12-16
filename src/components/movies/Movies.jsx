import React, {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MovieCard from './movie-card/Movie-Card';
import { getLatest }  from '../../services/latest';

import './Movies.scss';


const Movies = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        let mounted = true;
        getLatest(1)
          .then(items => {
            if(mounted) {
              setMovies(items)
            }
          })
        return () => mounted = false;
    })

    return <>
        <h1>Latest Movies</h1>
        <Container bsPrefix="moviesGrid">
          
            {movies != null ? movies.results.map(movie => <MovieCard key={movie.title} details={movie} />) : <p>Loading</p>}
          
          
        </Container>
        
    </>
}

export default Movies;