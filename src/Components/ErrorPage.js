import React from 'react';
import {Link} from 'react-router-dom';

function ErrorPage() {
    return(
        <div>
            <h1>OOPS! SOMETHING WENT WRONG!</h1>
            <Link to='/'>
                <button>Go Home</button>
            </Link>
            <img src='https://media1.giphy.com/media/YrJp9LFIDkwms/giphy.gif?cid=ecf05e475da69drqsup4d3oownfylfexjozvs3arm33xwwi1&rid=giphy.gif&ct=g' alt='Panda on a spinning chair'></img>
        </div>
    )
}

export default ErrorPage;