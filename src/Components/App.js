import '../Styling/App.css';
import React, { Component } from 'react';
import AnimeContainer from './AnimeContainer'
import Form from './Form';

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <Form />
        <AnimeContainer />
      </div>
    );
  }
}

export default App;
