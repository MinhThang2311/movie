import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://www.omdbapi.com?apikey=11cda148";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="container">
      {movie ? (
        <div className="content">
          <img src={movie.Poster} alt={movie.Title} />
          <div>
            <h2>{movie.Title}</h2>
            <div>
              <strong>Plot:</strong> {movie.Plot}
            </div>
            <div>
              <strong>Year:</strong> {movie.Year}
            </div>
            <div>
              <strong>Director:</strong> {movie.Director}
            </div>
            <div>
              <strong>Actors:</strong> {movie.Actors}
            </div>
          </div>
        </div>
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
};

export default MovieDetail;
