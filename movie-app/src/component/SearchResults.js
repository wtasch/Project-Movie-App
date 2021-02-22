import React, { Component } from 'react';
import Search from './Search';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state={
      resultsData:[],
      apiDataLoaded: false
    }
  }

  componentDidMount= async (props) => {
    const movieSearch = this.props.location.state.title
    const movieData1 = await axios.get(`http://www.omdbapi.com/?apikey=38e29c7e&s=${movieSearch}`)

    this.setState ({
      resultsData: movieData1.data.Search,
      apiDataLoaded: true
    })
  }

  render() {

    return (
      <div>
        {this.state.apiDataLoaded ? 
        <div>
          <h1>testing</h1>
          <div>
            {this.state.resultsData.map(result => (
              <div key={result.imdbID}>
                {result.Title}
              </div>
            ))}
          </div>  
        </div>
        :
        <h3>data not loaded</h3>
        }
      </div>
    )
  }

}
export default SearchResults;


