import React from 'react';
import {Link} from 'react-router-dom';
import '../Styling/ErrorPage.css'

function ErrorPage() {
    return(
        <div className='error-page'>
            <h1 className='error-page-message'>OOPS! SOMETHING WENT WRONG! Please clicking
            <Link to='/'>
            <span> here </span> 
            </Link>
            or the home button to go back.</h1>
            <img src='https://media1.giphy.com/media/YrJp9LFIDkwms/giphy.gif?cid=ecf05e475da69drqsup4d3oownfylfexjozvs3arm33xwwi1&rid=giphy.gif&ct=g' alt='Panda on a spinning chair'></img>
        </div>
    )
}

export default ErrorPage;