import React from 'react';
import Anime from './Anime';
import '../Styling/AnimeContainer.css';

function AnimeContainer({ anime }) {
    const animeList = anime.map(specificAnime => {
        return <Anime
            id={ anime.indexOf(specificAnime) }
            key={ anime.indexOf(specificAnime) }
            title={ specificAnime.title }
            image={ specificAnime.image }
        />
    })

    return(
        <div>
           { animeList }
        </div>
    )
}

export default AnimeContainer