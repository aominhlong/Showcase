import React from 'react';
import '../Styling/Anime.css';

function Anime({ animeInfo, id, addToWatchList, myWatchList, deleteFromWatchList }) {
    const myWatchListTitles = myWatchList.map(anime => anime.title)
    return(
        <div className='anime-card' id={ animeInfo.title }>
            <img src={ animeInfo.image } alt={ animeInfo.title + 'poster'} />
            <div className='anime-details'>
                <h1>{ animeInfo.title }</h1>
                <h4>rating: { animeInfo.rating }</h4>
                <h5>{ animeInfo.genre.join(', ') }</h5>
                { myWatchListTitles.includes(animeInfo.title) ? <h5>"Anime is in your watch list"</h5> : 
                <button onClick={(() => addToWatchList(animeInfo.title))}>Add Anime to Watchlist</button> }
                { myWatchListTitles.includes(animeInfo.title) && <button onClick={(() => deleteFromWatchList(animeInfo.title))}>Remove from your Watchlist</button>}
            </div>
        </div>
    )
}

export default Anime;