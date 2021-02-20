import React, { Component } from 'react';

import './App.css';

import axios from 'axios';

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
    ]
    //console.log(movieData);
    this.setState ({
      movieData: movieData,
      apiDataLoaded: true
    })
  }
  

  render(){
  return (
    <div className="App">
      Testing
    </div>
  );
}
}

export default App;
