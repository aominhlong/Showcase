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

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/anime')
    .then(res => res.json())
    .then(data => this.setState({ allAnime: data }))
  }

  render() {
    return (
      <div className="App">
        <Form />
        <AnimeContainer anime={ this.state.allAnime }/>
      </div>
    );
  }
}

export default App;
