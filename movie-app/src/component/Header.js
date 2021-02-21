import React, { Component } from 'react';
import '../Header.css';






const Header = (props) => {
  console.log(props.movieData);
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
      <h1 className="title">Couch Sloth Movie App</h1>
    </div>
    </header>

  </div>
  )
}

export default Header;