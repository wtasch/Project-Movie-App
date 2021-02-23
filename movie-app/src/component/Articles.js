import React from 'react';
//import { Route, Link, Switch } from 'react-router-dom';
import '../Articles.css'


const Articles = (props) => {
    console.log(props.news)
  return (
      <div className="news-container">
      <div className="article">
      {props.news.map(news => <p className="newstext" >{news.title}<img className="imgNews" src={news.urlToImage}/></p>)}  
          </div>
   </div>
  )
}
export default Articles;