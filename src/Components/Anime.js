import React from 'react';
import PropTypes from 'prop-types';
import '../Styling/Anime.css';


function Anime({ title, rating, image, genre, addToWatchList, myWatchList, deleteFromWatchList }) {
    const myWatchListTitles = myWatchList.map(anime => anime.title)
    return(
        <div className='anime-card' id={ title }>
            <img src={ image } alt={ title + 'poster'} />
            <div className='anime-details'>
                <h1>{ title }</h1>
                <h5 className='genre'>({ genre.join(', ') })</h5>
                <h4 className='rating'>rating: { rating }</h4>
                { myWatchListTitles.includes(title) ? <h5 className='in-watch-list'>(Anime is in your watch list)</h5> : 
                <button id='add-anime-btn' className={`${title}-add-btn`} onClick={(() => addToWatchList(title))}>Add Anime to Watchlist</button> }
                { myWatchListTitles.includes(title) && <button id='delete-btn' className={`${title}-delete-btn`} onClick={(() => deleteFromWatchList(title))}>Remove from your Watchlist</button> }
            </div>
        </div>
    )
}

export default Anime;

Anime.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    image: PropTypes.string,
    myWatchList: PropTypes.array,
    addToWatchList: PropTypes.func,
    deleteFromWatchList: PropTypes.func
}