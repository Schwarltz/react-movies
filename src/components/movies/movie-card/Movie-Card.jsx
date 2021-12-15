import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';



function MovieCard(props) {
    return <Card bsPrefix='' md={4}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${props.details.poster_path}`}/>
        <Card.Footer>
            <h2>{props.details.title}</h2>
            <p>{props.details.overview}</p>
        </Card.Footer>
    </Card>
}

export default MovieCard;