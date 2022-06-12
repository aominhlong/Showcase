import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styling/Navbar.css';

function Navbar({ chooseGenre, chooseMostPopular }) {
    return(
        <div className='navbar'>
            <div className='dropdown'>
                    <button className='categories'>Genre</button>
                    <div className='dropdown-content'>
                        <a href='#action' id='Action' className='action' onClick={(event => chooseGenre(event))}>Action</a>
                        <a href='#comedy' id='Comedy' onClick={(event => chooseGenre(event))}>Comedy</a>
                        <a href='#adventure' id='Adventure' onClick={(event => chooseGenre(event))}>Adventure</a>
                        <a href='#drama' id='Drama' onClick={(event => chooseGenre(event))}>Drama</a>
                        <a href='#sport' id='Sport' onClick={(event => chooseGenre(event))}>Sport</a>
                        <a href='#fantasy' id='Fantasy' onClick={(event => chooseGenre(event))}>Fantasy</a>
                        <a href='#sci-fi' id='Sci-Fi' onClick={(event => chooseGenre(event))}>Sci-Fi</a>
                    </div>
            </div>
            <button className='popular-btn' onClick={() => chooseMostPopular()}>Popular</button>
            <Link to='/watch-list'>
                <button className='my-watch-list-btn'>My list</button>
            </Link>
        </div>
    )
}

export default Navbar;

Navbar.propTypes = {
    chooseGenre: PropTypes.func,
    chooseMostPopular: PropTypes.func
}