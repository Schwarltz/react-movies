import React, { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './Movie-Card.scss';

function MovieCard(props) {
    const [clicked, setClicked] = useState(false);
    
    let voteColour = "vote";
    if (props.details.vote_average < 5) {
        voteColour="vote-low";
    } else if (props.details.vote_average < 8) {
        voteColour="vote-med";
    } else {
        voteColour="vote-high";
    }

    return <Card bsPrefix="movieCard">
        <Container bsPrefix="containerCard">
            <Card.Img href={props.details.title} src={`https://image.tmdb.org/t/p/w500${props.details.poster_path}`}/>
            <Container bsPrefix={voteColour}>
                <b>{props.details.vote_average}</b>
            </Container>

            <Container bsPrefix="overlay">
                {!clicked ? <button className="moreInfo" onClick={()=>{setClicked(true)}}>More Info</button>
                : <div className="overview">
                    <p>{props.details.overview}</p>
                </div>
                }
            </Container>
        </Container>
        <Card.Body>
            <Card.Title bsPrefix="movieTitle">{props.details.title}</Card.Title>
        </Card.Body>
    </Card>
}

export default MovieCard;