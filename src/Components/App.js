import '../Styling/App.css';
import React, { Component } from 'react';
import AnimeContainer from './AnimeContainer'
import Form from './Form';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state={
      allAnime: [],
      searchedAnime: [],
      myWatchList: [],
      userInput: ''
    }
  }

  componentDidMount() {
    console.log('heck')
    fetch('http://localhost:3001/api/v1/anime')
    .then(res => res.json())
    .then(data => this.setState({ allAnime: data.animeList, searchedAnime: data.userWatchList }))
  }

  clearInput = () => {
    this.setState({ userInput: '' })
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value, searchedAnime: this.allAnime })
    const filteredAnime = this.state.allAnime.filter(anime => {
      return anime.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({ searchedAnime: filteredAnime })
  }

  addToWatchList = (title) => {
    const newAnime = this.state.allAnime.find(anime => {
      return anime.title.toLowerCase().includes(title.toLowerCase())
    })

    fetch(`http://localhost:3001/api/v1/anime`, {
      method: 'POST',
      body: JSON.stringify({
        "title": newAnime.title,
        "image": newAnime.image,
        "rating": newAnime.rating,
        "runtime": newAnime.runtime,
        "genre": newAnime.genre
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (this.state.myWatchList.length < 1 && !this.state.myWatchList.includes(newAnime)) {
      this.setState({ myWatchList: [newAnime] })
    } else if (!this.state.myWatchList.includes(newAnime)) {
      this.setState({ myWatchList: [...this.state.myWatchList, newAnime] })
    }
  }

  render() {
    return (
      <div className="App">
        <Form searchAnime={ this.handleChange } input={ this.state.userInput }/>
        <Route exact path="/" render={() => {
          if (!this.state.searchedAnime.length && !this.state.userInput) {
            return   <AnimeContainer anime={ this.state.allAnime } addToWatchList={this.addToWatchList}/>
          } else if (!this.state.searchedAnime.length) {
            return <h1 className='no-search-result'>{`Sorry, '${this.state.userInput}' was not found. Please try again later.`}</h1>
          } else {
            return <AnimeContainer anime={ this.state.searchedAnime } addToWatchList={this.addToWatchList}/>
          }
        }} />
        <Route path="/watch-list" render={() => {
          console.log('hi')
          return <AnimeContainer anime={ this.state.myWatchList } addToWatchList={this.addToWatchList}/>
        }} />
      </div>
    )
  }
}

export default App;
