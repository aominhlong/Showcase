import React from 'react';
import PropTypes from 'prop-types';
import '../Styling/RandomAnime.css';


function RandomAnime({ randomAnime, addToWatchList, myWatchList }) {
    if (Object.keys(randomAnime).length) {
        const foundAnime = myWatchList.filter(anime => {
            return anime.title === randomAnime.title })
        return(
            <div className='random-anime'>
                <div className='random-anime-container'>
                <h1 className='pick-of-the-day'>Anime Pick of the Day</h1>
                <img className='random-anime-img' src={ randomAnime.image } alt={'Poster of ' + randomAnime.title }></img>
                
                { foundAnime.length ? <h5>(Anime is in your watch list)</h5> : 
                <button className='add-random-anime' onClick={(() => addToWatchList(randomAnime.title))}>Add Anime to Watchlist</button> }

                <h1 className='random-anime-title'>{ randomAnime.title }</h1>
                <p className='random-anime-synopsys'>{ randomAnime.synopsis }</p>
                <p className='random-anime-genre'>({ randomAnime.genre.join(', ') })</p>
                </div>
            </div>
        )
    } 
}

export default RandomAnime;

RandomAnime.propTypes = {
    randomAnime: PropTypes.object,
    myWatchList: PropTypes.array,
    addToWatchList: PropTypes.func
}