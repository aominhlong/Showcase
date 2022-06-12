import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styling/Form.css';

function Form({ input, searchAnime, clearSearchedAnime }) {
    return (
        <div>
            <div className='header'>
                 <h1 className='app-title'>Ani-Planet</h1>
                 <Link to='/'>
                    <button className='home-btn' onClick={() => clearSearchedAnime()}>Home</button>
                 </Link>
                 <input className='search-bar' type='text' placeholder='search' value={input} onChange={(event => searchAnime(event))}></input>
            </div>
        </div>
    )
}

export default Form;

Form.propTypes = {
    input: PropTypes.string,
    searchAnime: PropTypes.func,
    clearSearchedAnime: PropTypes.func
}