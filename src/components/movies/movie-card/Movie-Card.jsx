import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Movie-Card.scss';

function MovieCard(props) {
    const [clicked, setClicked] = useState(false);
    
    function handleOnClick() {
        setClicked(!clicked);
        console.log('flipping clicked');
    }

    return <Card bsPrefix="movieCard">
    {/* return <Card> */}
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${props.details.poster_path}`}/>
        <Card.Body>
            <Card.Title>{props.details.title}</Card.Title>
            <Button variant="primary" 
                    size="lg" 
                    style={{width:"100%"}} 
                    onClick={()=> {setClicked(!clicked)}}
                    >
                {!clicked ? "More Info" : "Less Info"}
            </Button>
            {clicked ? 
                <p>{props.details.overview}</p>: null
}
        </Card.Body>
        
    </Card>
}

export default MovieCard;