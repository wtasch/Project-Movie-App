import React, { Component } from 'react';

import './App.css';

import axios from 'axios';

import Header from './component/Header';
import MovieList from './component/MovieList';
import MovieDetail from './component/MovieDetail';
import Footer from './component/Footer';

//api key 38e29c7e

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      movieData:[],
      apiDataLoaded: false
    }
  }

  componentDidMount=async ()=>{
    const movieData1=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=top+gun")
    const movieData2=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=blade+runner")
    const movieData3=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=blazing+saddles")
    const movieData4=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=inception")
    const movieData5=await axios.get("http://www.omdbapi.com/?apikey=38e29c7e&t=caddyshack")
    
    const movieData = [
      movieData1.data,
      movieData2.data,
      movieData3.data,
      movieData4.data,
      movieData5.data,
    ];
    console.log(movieData);
    this.setState ({
      movieData: movieData,
      apiDataLoaded: true
    })
  }
  

  render(){
  return (
    <div>
      {this.state.apiDataLoaded ?  
        <div className="App">
          <Header />
          <MovieList movieData={this.state.movieData} />
          <MovieDetail movieData={this.state.movieData} />
          <Footer />
          <p>Data Loaded</p>
        </div>
        : <p>data not loaded</p>
      }
    </div>
  );
}
}

export default App;
