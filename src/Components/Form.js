import React from 'react';
import '../Styling/Form.css';
import { Link } from 'react-router-dom';

function Form({ input, searchAnime }) {
    return (
        <div>
            <div className='header'>
                 <h1 className='app-title'>Ani-Planet</h1>
                 <a href='/watch-list'>My watch list</a>
                 <input type='text' placeholder='search' value={input} onChange={(event => searchAnime(event))}></input>
            </div>
        </div>
    )
}

export default Form;