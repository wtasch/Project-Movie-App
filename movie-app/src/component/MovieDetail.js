import React from 'react';
import '../MovieDetail.css';

const MovieDetail = (props) => {
  const foundMovie = props.movieData.find(movie=>{
    return movie.Title===props.match.params.Title;
  });
  console.log(foundMovie.Ratings);

  return (
      <div className = "movie-detail">
        {foundMovie ? (
          <div>
            <div className="name-title">
              <h2>{foundMovie.Title}</h2>
            </div>
            <div className="ratings">
              {foundMovie.Ratings.map((ratings, index) => 
                <div key={index}>
                  <p>{ratings.Source}</p>
                  <p>{ratings.Value}</p>
                </div>
              )}
            </div>
            <div className="poster">
              <img src={foundMovie.Poster} alt="movie poster" />
            </div>
            <div className="plot">  
              <p>{foundMovie.Plot}</p>
            </div>
            <div className="cast">
              <h3>Actors/Cast</h3>
              <p>{foundMovie.Actors}</p>
            </div>
            <div>  
              <h3>Director</h3>
              <p>{foundMovie.Director}</p>
            </div>
            <div className="various">  
              <h3>Genre</h3><p>{foundMovie.Genre}</p>
              <h3>Release Date</h3><p>{foundMovie.Released}</p>
              <h3>Runtime</h3><p>{foundMovie.Runtime}</p>
            </div>
            
             
            
          </div>  
        ) :
        <p>Movie detail not loaded</p>
        }
      </div>
  
  )
}

export default MovieDetail;