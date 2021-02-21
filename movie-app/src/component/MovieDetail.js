import React from 'react';

const MovieDetail = (props) => {
  console.log(props.movieData);

  const foundMovie = props.movieData[0];

  return (
      <div className = "summary">
        <div>
          <h2>{foundMovie.Title}</h2>
          <h3>Summary</h3>
          <p>{foundMovie.Plot}</p>
        </div>
        <div>
          <h3>Actors/Cast</h3>
          <p>{foundMovie.Actors}</p>
        </div>
        <div>  
          <h3>Director</h3>
          <p>{foundMovie.Director}</p>
          <h3>Genre</h3><p>{foundMovie.Genre}</p>
          <h3>Release Date</h3><p>{foundMovie.Released}</p>
          <h3>Runtime</h3><p>{foundMovie.Runtime}</p>
        </div> 
        <div className="photoURL">
          <h3>Poster URL:</h3>
          <summary>{foundMovie.Poster}</summary>
        </div>
      </div>
  
  )
}

export default MovieDetail;