import React, { Component } from 'react';
import '../Styling/Form.css'

class Form extends Component {
    constructor() {
        super()

    }
    render() {
        return(
            <div className='header'>
                <h1 className='app-title'>Ani-Planet</h1>
                <input type='text' placeholder='search'></input>
            </div>
        )
    }
}

export default Form;