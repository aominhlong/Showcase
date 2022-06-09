import React from 'react';
import '../Styling/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className='navbar'>
            <Link to='/'>
                <button className='home-btn'>Home</button>
            </Link>
            <button>genre</button>
        </div>
    )
}

export default Navbar;