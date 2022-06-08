import React from 'react';
import Anime from './Anime';
import '../Styling/AnimeContainer.css';

function AnimeContainer({ anime }) {
    console.log('anime', anime)
   
    const animeList = anime.map(specificAnime => {
        console.log(specificAnime)
        return <Anime
            id={ anime.indexOf(specificAnime) }
            key={ anime.indexOf(specificAnime) }
            animeInfo={ specificAnime }
        />
    })

    return(
        <div className='anime-container'>
            
           { animeList }
        </div>
    )
}

export default AnimeContainer