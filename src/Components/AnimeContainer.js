import React from 'react';
import Anime from './Anime';
import PropTypes from 'prop-types';
import '../Styling/AnimeContainer.css';

function AnimeContainer({ anime, addToWatchList, myWatchList, deleteFromWatchList }) {
    const animeList = anime.map(specificAnime => {
        return <Anime
            id={ anime.indexOf(specificAnime) }
            key={ anime.indexOf(specificAnime) }
            title={ specificAnime.title }
            rating={ specificAnime.rating }
            image= { specificAnime.image }
            genre={ specificAnime.genre }
            addToWatchList={ addToWatchList }
            myWatchList={ myWatchList }
            deleteFromWatchList={ deleteFromWatchList }
        />
    })
    return(
        <div className='anime-container'>
           { animeList }
        </div>
    )
}

export default AnimeContainer

AnimeContainer.propTypes = {
    anime: PropTypes.array,
    myWatchList: PropTypes.array,
    addToWatchList: PropTypes.func,
    deleteFromWatchList: PropTypes.func
}