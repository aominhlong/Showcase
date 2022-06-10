import '../Styling/App.css';
import React, { Component } from 'react';
import AnimeContainer from './AnimeContainer'
import Form from './Form';
import Navbar from './Navbar'
import { Route, Switch } from 'react-router-dom';
import RandomAnime from './RandomAnime';

class App extends Component {
  constructor() {
    super()
    this.state={
      allAnime: [],
      searchedAnime: [],
      myWatchList: [],
      randomAnime: {},
      userInput: '',
      onWatchList: false
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/anime')
    .then(res => res.json())
    .then(data => this.setState({ allAnime: data.animeList, myWatchList: data.userWatchList, randomAnime: data.animeList[this.getRandomIntInclusive(0, data.animeList.length)] }))
  }

  clearSearchedAnime = () => {
    this.setState({ userInput: '', searchedAnime: [] })
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value, searchedAnime: this.allAnime })
    const filteredAnime = this.state.allAnime.filter(anime => {
      return anime.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({ searchedAnime: filteredAnime })
  }

  chooseGenre = (event) => {
    const filteredGenre = this.state.allAnime.filter(anime => anime.genre.includes(event.target.id)
    )
    this.setState({ searchedAnime: filteredGenre })
  }

  chooseMostPopular = () => {
    const animeList = Array.from(this.state.allAnime)
    const sortPopularity = animeList.sort((a, b) => {
      return b.rating - a.rating
    })
    this.setState({ searchedAnime: sortPopularity })
  }

  addToWatchList = (title) => {
    const newAnime = this.state.allAnime.find(anime => {
      return anime.title.toLowerCase() === title.toLowerCase()
    })
  
    if (this.state.myWatchList.length < 1 && !this.state.myWatchList.includes(newAnime)) {
      this.setState({ myWatchList: [newAnime] })

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

    } else if (!this.state.myWatchList.includes(newAnime)) {
      this.setState({ myWatchList: [...this.state.myWatchList, newAnime] })

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
    }
  }

  render() {
    return (
      <div className="App">
        <Form searchAnime={ this.handleChange } input={ this.state.userInput } clearSearchedAnime={ this.clearSearchedAnime } />
        
        <Switch>
          <Route exact path="/" render={() => {
            if (!this.state.searchedAnime.length && !this.state.userInput) {
              return <div>
                <Navbar chooseGenre={this.chooseGenre} chooseMostPopular={this.chooseMostPopular} />
                <div className='homepage'>
                  <AnimeContainer anime={ this.state.allAnime } addToWatchList={ this.addToWatchList } myWatchList={ this.state.myWatchList }/>
                  <div className='spacer'></div>
                  <div className='random-anime'>
                    <RandomAnime randomAnime={this.state.randomAnime} />
                  </div>
                </div>
                </div>
            } else if (!this.state.searchedAnime.length) {
              return <h1 className='no-search-result'>{`Sorry, '${this.state.userInput}' was not found. Please try again later.`}</h1>
            } else {
              return <div>
                <Navbar chooseGenre={this.chooseGenre} chooseMostPopular={this.chooseMostPopular} />
                <AnimeContainer anime={ this.state.searchedAnime } addToWatchList={ this.addToWatchList } myWatchList={ this.state.myWatchList }/>
                </div>
            }
          }} />
          <Route path="/watch-list" render={() => {
            return <AnimeContainer anime={ this.state.myWatchList } addToWatchList={ this.addToWatchList } myWatchList={ this.state.myWatchList }/>
          }} />
        </Switch>
      </div>
    )
  }
}

export default App;
