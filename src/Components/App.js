import '../Styling/App.css';
import React, { Component } from 'react';
import AnimeContainer from './AnimeContainer'
import Form from './Form';

class App extends Component {
  constructor() {
    super()
    this.state={
      allAnime: [],
      searchedAnime: [],
      myFavorites: [],
      userInput: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/anime')
    .then(res => res.json())
    .then(data => this.setState({ allAnime: data }))
  }

  clearInput = () => {
    this.setState({ userInput: '' })
  }

  handleChange = (event) => {
    this.setState({userInput: event.target.value, searchedAnime: this.allAnime})
    const filteredAnime = this.state.allAnime.filter(anime => {
      return anime.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({searchedAnime: filteredAnime})
  }

  render() {
    return (
      <div className="App">
        <Form searchAnime={this.handleChange} input={this.state.userInput}/>
        <AnimeContainer anime={ this.state.allAnime }/>
      </div>
    );
  }
}

export default App;
