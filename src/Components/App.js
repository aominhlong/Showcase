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
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'top-anime.p.rapidapi.com',
        'X-RapidAPI-Key': '4de6896f49msh780fa1b9750db1dp16d75ejsnbf811bde6617'
      }
    };

    fetch('https://top-anime.p.rapidapi.com/all', options)
      .then(response => response.json())
      .then(data => {
        console.log([data])
        this.setState({ allAnime: data })
      })
      .catch(err => console.error(err));
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
