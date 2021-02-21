import React from 'react';

const MovieDetail = (props) => {
  console.log(props.movieData);

  return (
    <div>
      <h2>{props.movieData[0].Title}</h2>
      <h3>Summary</h3>
      <p>{props.movieData[0].Plot}</p>
      <h3>Actors/Cast</h3>
      <p>{props.movieData[0].Actors}</p>
      <h3>Director</h3>
      <p>{props.movieData[0].Director}</p>
      <h3>Genre:</h3><p>{props.movieData[0].Genre}</p>
      <h3>Release Date:</h3><p>{props.movieData[0].Released}</p>
      <h3>Runtime</h3><p>{props.movieData[0].Runtime}</p>
      <h3>Poster URL:</h3>
      <details><summary>{props.movieData[0].Poster}</summary></details>



    </div>
  )
}

export default MovieDetail;