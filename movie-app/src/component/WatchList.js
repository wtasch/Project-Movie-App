import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieList.css';

const WatchList = (props) => {
  console.log(props);
  const wishList = props.watchList;
  console.log(wishList);
  
  
  return (
    <div className="movieList">
        

            {props.watchList.map(movie => (
            <div key={movie.imdbID} className="movieCard">
                <div className="movieCardImageContainer">
                
                    <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                
                </div>
                
                <div className="movie-name">
                    {movie.Title}
                </div>
                
            </div>
            ))}
       

    </div>
    
  )
}

export default WatchList;