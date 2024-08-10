import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import Search from "./Search";
import MovieList from "./MovieList";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=11cda148";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const query = title || "Spiderman";
    const response = await fetch(`${API_URL}&s=${query}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <Search searchMovies={searchMovies} />
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
