import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const API_URL = "http://www.omdbapi.com?apikey=11cda148";

const MovieDetail = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  const searchMovies = async (title) => {
    const query = title || "Spiderman";
    const response = await fetch(`${API_URL}&s=${query}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("");
    const fetchMovie = async () => {
      const response = await fetch(`${API_URL}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      <div className="container">
        {movie ? (
          <div className="content">
            <img src={movie.Poster} alt={movie.Title}></img>
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
              <div className="button-overlay">
                <button>Watch Movie</button>
              </div>
            </div>
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}
      </div>
    </>
  );
};

export default MovieDetail;
