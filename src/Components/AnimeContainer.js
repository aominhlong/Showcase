import React from 'react';
import Anime from './Anime';
import '../Styling/AnimeContainer.css';

function AnimeContainer({ anime, addToWatchList }) {
    const animeList = anime.map(specificAnime => {
        return <Anime
            id={ anime.indexOf(specificAnime) }
            key={ anime.indexOf(specificAnime) }
            animeInfo={ specificAnime }
            addToWatchList={ addToWatchList }
        />
    })

    return(
        <div className='anime-container'>
            
           { animeList }
        </div>
    )
}

export default AnimeContainer