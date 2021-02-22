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


    console.log(this.props.location.state.title);
    console.log(movieData1)

  }

  render() {
    return (
      <div>
        test
      </div>
    )
  }

}
export default SearchResults;


