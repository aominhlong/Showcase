import '../Styling/App.css';
import React, { Component } from 'react';
import AnimeContainer from './AnimeContainer'
import Form from './Form';
import Navbar from './Navbar'
import { Route, Switch, Link } from 'react-router-dom';
import RandomAnime from './RandomAnime';
import ErrorPage from './ErrorPage';

class App extends Component {
  constructor() {
    super()
    this.state={
      allAnime: [],
      searchedAnime: [],
      myWatchList: [],
      randomAnime: {},
      userInput: '',
      error: ''
    }
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  componentDidMount() {
    fetch('https://anime-api-showcase.herokuapp.com/api/v1/anime')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        console.log(res)
        throw Error(res.url)
      }
    })
    .then(data => this.setState({ allAnime: data.animeList, myWatchList: data.userWatchList, randomAnime: data.animeList[this.getRandomIntInclusive(0, data.animeList.length)] }))
    .catch(err  => {
      console.log(err)
      this.setState({error: `${err} not found`})
    })
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
    const filteredGenre = this.state.allAnime.filter(anime => anime.genre.includes(event.target.id))
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

      fetch(`https://anime-api-showcase.herokuapp.com/api/v1/anime`, {
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
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.statusText)
        }
      })
      .catch(err => {
        this.setState({error: true})
      })

    } else if (!this.state.myWatchList.includes(newAnime)) {
      this.setState({ myWatchList: [...this.state.myWatchList, newAnime] })

      fetch(`https://anime-api-showcase.herokuapp.com/api/v1/anime`, {
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
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw Error(res.statusText)
        }
      })
      .catch(err => {
        this.setState({error: true})
      })
    }
  }
  
  deleteFromWatchList = (title) => {
    const foundAnime = this.state.allAnime.find(anime => {
      return anime.title.toLowerCase() === title.toLowerCase()
    })
    fetch(`https://anime-api-showcase.herokuapp.com/api/v1/anime`, {
      method: 'DELETE',
      body: JSON.stringify({
        "title": foundAnime.title,
        "image": foundAnime.image,
        "rating": foundAnime.rating,
        "runtime": foundAnime.runtime,
        "genre": foundAnime.genre
      }),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      .then(res => {if (!res.ok) {
        throw Error(res.url)
      }
      })
      .catch(err => {
        this.setState({error: `Failed to delete from ${err}`})
      })
      .then(() =>
        fetch('https://anime-api-showcase.herokuapp.com/api/v1/anime'))
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log(res) 
          throw Error(res.url)
        }
      })
      .then(data => this.setState({ myWatchList: data.userWatchList }))
      .catch(err => {
          this.setState({error: `${err} not found`})
      })
  }
  
  render() {
    if (this.state.error.length) {
      return <div className='get-error'>
        <img src='https://media0.giphy.com/media/b5Hcaz7EPz26I/giphy.gif?cid=ecf05e47ij3770kpoadpiqzlvgttye8bvk2dkr1r8zolpnm6&rid=giphy.gif&ct=g' alt='hamster cutting cucumber'></img>
        <h1>{this.state.error}</h1>
        </div>
    } else {
    return (
      <div className="App">
        <Form searchAnime={ this.handleChange } input={ this.state.userInput } clearSearchedAnime={ this.clearSearchedAnime } />
        
        <Switch>
          <Route exact path="/" render={() => {
            if (!this.state.searchedAnime.length && !this.state.userInput && this.state.randomAnime) {
              return <div>
                <Navbar chooseGenre={this.chooseGenre} chooseMostPopular={this.chooseMostPopular} />
                <div className='homepage'>
                  <AnimeContainer anime={ this.state.allAnime } addToWatchList={ this.addToWatchList } myWatchList={ this.state.myWatchList } deleteFromWatchList={ this.deleteFromWatchList }/>
                  <div className='divider'></div>
                  <div className='random-anime'>
                    <RandomAnime randomAnime={ this.state.randomAnime } myWatchList={ this.state.myWatchList } addToWatchList={ this.addToWatchList } />
                  </div>
                </div>
                </div>
            } else if (!this.state.searchedAnime.length) {

              return <div className='no-search-results'>
                <h1 className='no-search-result'>{`Sorry, '${this.state.userInput}' was not found. Please try again later.`}</h1>
                <img src='https://media3.giphy.com/media/pYNhxuY2Xx528/giphy.gif?cid=ecf05e47teexkn1zyroa847859zf2kredlk9v8vg9q0o034h&rid=giphy.gif&ct=g' alt='My Neighbor Totoro Gif'></img>
              </div>

            } else {
              return <div>
                <Navbar chooseGenre={this.chooseGenre} chooseMostPopular={this.chooseMostPopular} />
                <AnimeContainer anime={ this.state.searchedAnime } addToWatchList={ this.addToWatchList } myWatchList={ this.state.myWatchList } deleteFromWatchList={ this.deleteFromWatchList }/>
                </div>
            }
          }} />
        </Switch>
          <Route path="/watch-list" render={() => {
            return <AnimeContainer anime={ this.state.myWatchList } addToWatchList={ this.addToWatchList } myWatchList={ this.state.myWatchList } deleteFromWatchList={ this.deleteFromWatchList }/>
          }} />

          <Route path="/error" render={() => {
            if (this.state.error=true) {
              return <ErrorPage />
            }
          }}>
          </Route>
          
      </div>
    )
    }
  }
}

export default App;
