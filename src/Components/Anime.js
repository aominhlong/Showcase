import React from 'react';
import '../Styling/Anime.css';

function Anime({ id, title, image }) {
    return(
        <div id={ id }>
            <img src={ image } alt={ 'A poster image of ' + title } />
            <h1>{ title }</h1>
        </div>
    )
}

export default Anime;