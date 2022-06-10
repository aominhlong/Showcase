import React from 'react';
import '../Styling/Form.css';
import { Link } from 'react-router-dom';

function Form({ input, searchAnime, clearSearchedAnime }) {
    return (
        <div>
            <div className='header'>
                 <h1 className='app-title'>Ani-Planet</h1>
                 <Link to='/'>
                    <button className='home-btn' onClick={() => clearSearchedAnime()}>Home</button>
                 </Link>
                 <input type='text' placeholder='search' value={input} onChange={(event => searchAnime(event))}></input>
            </div>
        </div>
    )
}

export default Form;