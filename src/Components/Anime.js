import React from 'react';
import '../Styling/Anime.css';

function Anime({ animeInfo, id }) {
    console.log(animeInfo.genre)
    return(
        <div id={ id }>
            <img src={ animeInfo.image } alt={ animeInfo.title + 'poster'} />
            <h1>{ animeInfo.title }</h1>
            <h4>{ animeInfo.rating }</h4>
            <h5>{ animeInfo.genre.join(', ') }</h5>
        </div>
    )
}

export default Anime;