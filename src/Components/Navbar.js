import React from 'react';
import '../Styling/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar({ chooseGenre, clearSearchedAnime, chooseMostPopular }) {
    return(
        <div className='navbar'>
            <Link to='/'>
                <button className='home-btn' onClick={() => clearSearchedAnime()}>Home</button>
            </Link>
            <div className='dropdown'>
                    <button className='categories'>Genre</button>
                    <div className='dropdown-content'>
                        <a href='#' id='Action' onClick={(event => chooseGenre(event))}>Action</a>
                        <a href='#' id='Comedy' onClick={(event => chooseGenre(event))}>Comedy</a>
                        <a href='#' id='Adventure' onClick={(event => chooseGenre(event))}>Adventure</a>
                        <a href='#' id='Drama' onClick={(event => chooseGenre(event))}>Drama</a>
                        <a href='#' id='Sport' onClick={(event => chooseGenre(event))}>Sport</a>
                        <a href='#' id='Fantasy' onClick={(event => chooseGenre(event))}>Fantasy</a>
                        <a href='#' id='Sci-Fi' onClick={(event => chooseGenre(event))}>Sci-Fi</a>
                    </div>
            </div>
            <button className='popular-btn' onClick={() => chooseMostPopular()}>Popular</button>
        </div>
    )
}

export default Navbar;