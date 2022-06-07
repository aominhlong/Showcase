import '../Styling/App.css';
import React, { Component } from 'react';
import AnimeContainer from './AnimeContainer'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
          <AnimeContainer />
      </div>
    );
  }
}

export default App;
