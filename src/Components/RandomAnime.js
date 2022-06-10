import React from 'react';
import '../Styling/RandomAnime.css';

function RandomAnime({ randomAnime }) {
    if (randomAnime.genre) {
        return(
            <div className='random-anime'>
                <h1 className='pick-of-the-day'>Anime Pick of the Day</h1>
                <img src={ randomAnime.image } alt={'Poster of ' + randomAnime.title}></img>
                <h1 className='random-anime-title'>{ randomAnime.title }</h1>
                <p>({ randomAnime.genre.join(', ') })</p>
                <p>{ randomAnime.synopsis }</p>
            </div>
        )
    }
    
}

export default RandomAnime;