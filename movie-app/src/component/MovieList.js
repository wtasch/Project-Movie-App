import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieList.css';

const MovieList = (props) => {
  console.log(props);
  return (
    <div className="movieList"> 
      <h1>Movies!!.......</h1>
      {props.movieData.map(movie => (
        <div key={movie.imdbID} className="movieCard">
          <Link to={`/MovieDetail/${movie.Title}`}>
            <div>
              <img src={movie.Poster} alt={`${movie.Title} Poster`} />
              {movie.Title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default MovieList;