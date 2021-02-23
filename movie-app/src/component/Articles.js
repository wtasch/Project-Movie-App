import React from 'react';
//import { Route, Link, Switch } from 'react-router-dom';
//import '../Articles.css'


const Articles = (props) => {
    console.log(props)
  return (
    <div>
      {props.news.map(news => <p>{news.title}</p>)}  
      {props.news.map(news => <p>{news.author}</p>)}  
    </div>
  )
}
export default Articles;