import React from 'react';
import '../Styling/Anime.css';

function Anime({ animeInfo, id, addToWatchList }) {
    // console.log(animeInfo.title)
    return(
        <div className='anime-card' id={ animeInfo.title }>
            <img src={ animeInfo.image } alt={ animeInfo.title + 'poster'} />
            <div className='anime-details'>
                <h1>{ animeInfo.title }</h1>
                <h4>rating: { animeInfo.rating }</h4>
                <h5>{ animeInfo.genre.join(', ') }</h5>
                <button onClick={(() => addToWatchList(animeInfo.title))}>+</button>
            </div>
        </div>
    )
}

export default Anime;