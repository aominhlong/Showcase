import React from 'react';
import '../Styling/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar'>
            <Link to='/'>
                <button className='home-btn'>Home</button>
            </Link>
            <div className='dropdown'>
                    <button className='categories'>Genre</button>
                    <div className='dropdown-content'>
                        <a href='#' id='Action'>Action</a>
                        <a href='#' id='Comedy'>Comedy</a>
                        <a href='#' id='Adventure'>Adventure</a>
                        <a href='#' id='Drama'>Drama</a>
                        <a href='#' id='Sport'>Sport</a>
                        <a href='#' id='Fantasy'>Fantasy</a>
                        <a href='#' id='Sci-Fi'>Sci-Fi</a>
                    </div>
                </div>
        </div>
    )
}

export default Navbar;