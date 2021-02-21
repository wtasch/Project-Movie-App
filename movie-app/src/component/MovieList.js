import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
  console.log(props);
  return (
    <div> 
      <h1>Movies!!.......</h1>
      {props.movieData.map(movie => (
        <div key={movie.imdbID}>
          <h3>
            <Link to={`/MovieDetail/${movie.Title}`}>{movie.Title}</Link>
          </h3>
        </div>
      ))}
    </div>
  )
}

export default MovieList;