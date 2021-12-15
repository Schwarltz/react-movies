import React, {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import MovieCard from './movie-card/Movie-Card';
import { getLatest }  from '../../services/latest';



const Movies = () => {
    const [movies, setMovies] = useState(null);
    useEffect(() => {
        let mounted = true;
        getLatest()
          .then(items => {
            if(mounted) {
              setMovies(items)
            }
          })
        return () => mounted = false;
    })
    return <>
        <p>Latest Movies</p>
        <Container>
          <Row>
            {movies != null ? movies.results.map(movie => <MovieCard key={movie.title} details={movie} />) : <p>Loading</p>}
          </Row>
          
        </Container>
        
    </>
}

export default Movies;