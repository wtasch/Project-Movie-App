import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../Header.css';


const Header = (props) => {


  return (  
<div>
    <header>
  
      <nav>
        <img className="logoNav" src="https://i.imgur.com/zJg4M4I.png?1"></img>
        <Link className="headerLink" to="/">Home</Link>
        <Link className="headerLink" to="/Articles">News</Link>
        <input className="search" type="text" placeholder="Search a Movie..."/>
        <Link className="headerLink" to="/">Movie List Page</Link>
        <Link className="headerLink" to="/Login">LogIn</Link>
  
      </nav>
    <div>
      <img className="logo" src="https://i.imgur.com/zJg4M4I.png?1"></img>
    </div>
    <div>
      <div className="title">
        <h1 className="title1">Couch </h1>
        <h1 className="title2">Sloth</h1>
        <h1 className="title1"> Movie App</h1>
      </div>
    </div>
    
        <div className="dropmenu">
        <label for="genre">Choose a Movie Type     </label>
        <select className="droplist" name="genre" id="genre" placeholder="Genre">
          <option value="All">All</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Thriller">Thriller</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Western">Western</option>
          <option value="Comedy">Comedy</option>
          <option value="Adventure">Adventure</option>
          <option value="Sport">Sport</option>
        </select>
    </div>
</header>
  </div>
  )
}

export default Header;



/*




  console.log(props.movieData);
  


    <div>
          
            {props.movieData.map(movieData => (
          <div className="headerPoster">
            
            <img className="headerPost" scr="{movieData.Poster}"></img>
            <h3>{movieData.Title}  </h3>
          </div>

          ))}
    </div>

    */