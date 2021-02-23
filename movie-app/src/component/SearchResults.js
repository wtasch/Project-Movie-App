import React, { Component } from 'react';
import Search from './Search';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../SearchResults.css'

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state={
      movieData:[],
      apiDataLoaded: false
    }
  }

  componentDidMount= async (props) => {
    const movieSearch = this.props.location.state.title
    const movieData1 = await axios.get(`http://www.omdbapi.com/?apikey=38e29c7e&s=${movieSearch}`)

    this.setState ({
      movieData: movieData1.data.Search,
      apiDataLoaded: true
    })
  }

  render() {

    return (
      <div>
        {this.state.apiDataLoaded ? 
        <div className="resultsList">
          <h1>{`search results for ${this.props.location.state.title}...`}</h1>
          {this.state.movieData.map(movie => (
            <div key={movie.imdbID} className="resultsCard">
          <div className="resultsCardImageContainer">
            <Link to={`/MovieDetail/${movie.Title}`}>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            </Link>
          </div>
          <Link to={`/MovieDetail/${movie.Title}`}>
            <div className="resultsCardTitle">
              {movie.Title}
            </div>
          </Link>
        </div>
          ))}
        </div>
        :
        <h3>data not loaded</h3>
        }
      </div>
    )
  }

}
export default SearchResults;


