import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styling/Form.css';
import moon from '../Images/moon.png'

function Form({ input, searchAnime, clearSearchedAnime }) {
    return (
        <div>
            <div className='header'>
                <Link to='/'>
                <div className='app-title-container'>
                <img class='app-img' src={ moon } alt='moon picture'></img>
                    <h1 className='app-title'>Ani-Planet</h1>
                </div>
                </Link>
                <div className='search-home-container'>
                    <Link to='/'>
                        <button className='home-btn' onClick={() => clearSearchedAnime()}>Home</button>
                    </Link>
                    <input className='search-bar' type='text' placeholder='search' value={input} onChange={(event => searchAnime(event))}></input>
                </div>
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