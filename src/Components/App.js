import '../Styling/App.css';
import React, { Component } from 'react';
import AnimeContainer from './AnimeContainer'
import Form from './Form';

class App extends Component {
  constructor() {
    super()
    this.state={
      allAnime: []
    }
  }
  render() {
    return (
      <div className="App">
        <Form />
        <AnimeContainer Animes={ this.state.allAnime }/>
      </div>
    );
  }
}

export default App;
