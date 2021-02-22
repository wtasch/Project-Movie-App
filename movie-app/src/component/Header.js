import React, { Component } from 'react';
import '../Header.css';


const Header = (props) => {


  return (


<div>
    <header>
      <nav>
      <ul>
        <li><a>Home</a></li>
        <li><a>News</a></li>
        <li><a>Contact</a></li>
        <li><a>About</a></li>
        <li><a>LogIn/SignIn</a></li>
  
      </ul>

      </nav>
    <div>
      <img src="https://i.imgur.com/zJg4M4I.png?1"></img>
    </div>
    <div>
      <div className="title">
        <h1 className="title1">Couch </h1>
        <h1 className="title2">Sloth</h1>
        <h1 className="title1"> Movie App</h1>
      </div>
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