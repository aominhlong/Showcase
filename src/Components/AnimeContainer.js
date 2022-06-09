import React from 'react';
import Anime from './Anime';
import '../Styling/AnimeContainer.css';

function AnimeContainer({ anime, addToWatchList, myWatchList }) {
    const animeList = anime.map(specificAnime => {
        return <Anime
            id={ anime.indexOf(specificAnime) }
            key={ anime.indexOf(specificAnime) }
            animeInfo={ specificAnime }
            addToWatchList={ addToWatchList }
            myWatchList={ myWatchList }
        />
    })

    return(
        <div className='anime-container'>
            
           { animeList }
        </div>
    )
}

export default AnimeContainer