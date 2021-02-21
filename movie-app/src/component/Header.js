import React, { Component } from 'react';
import '../Header.css';


const Header = (props) => {
  console.log(props.movieData);
  return (
    <header>
    <div>
    <img src="https://i.imgur.com/zJg4M4I.png?1"></img>
    <h1 className="title">Couch Sloth Movie App</h1>
    </div>
    </header>
  )
}

export default Header;