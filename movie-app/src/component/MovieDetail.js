import React from 'react';

const MovieDetail = (props) => {
  console.log(props.movieData);

  return (
    <div>
      <h3>{props.movieData[0].Title}</h3>
      <h3>{props.movieData[0].Plot}</h3>
      <h3>{props.movieData[0].Actors}</h3>
      <h3>{props.movieData[0].Director}</h3>
      <h3>{props.movieData[0].Genre}</h3>
      <h3>{props.movieData[0].Released}</h3>
      <h3>{props.movieData[0].Runtime}</h3>
      <h3>{props.movieData[0].Poster}</h3>



    </div>
  )
}

export default MovieDetail;