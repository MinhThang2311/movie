import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
};

export default MovieList;
