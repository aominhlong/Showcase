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
                <h4>rating: { rating }</h4>
                <h5>{ genre.join(', ') }</h5>
                { myWatchListTitles.includes(title) ? <h5>"Anime is in your watch list"</h5> : 
                <button className={`${title}-add-btn`} onClick={(() => addToWatchList(title))}>Add Anime to Watchlist</button> }
                { myWatchListTitles.includes(title) && <button className={`${title}-delete-btn`} onClick={(() => deleteFromWatchList(title))}>Remove from your Watchlist</button> }
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