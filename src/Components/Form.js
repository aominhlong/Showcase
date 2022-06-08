import React, { Component } from 'react';
import '../Styling/Form.css'

function Form({ input, searchAnime }) {
    return (
        <div>
            <div className='header'>
                 <h1 className='app-title'>Ani-Planet</h1>
                 <button className='home-btn'>Home</button>
                 <a href='/watch-list'>My watch list</a>
                 <input type='text' placeholder='search' value={input} onChange={(event => searchAnime(event))}></input>
            </div>
        </div>
    )
}

export default Form;