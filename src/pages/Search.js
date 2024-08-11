import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../search.svg";
import "../App.css";

const Search = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(searchTerm);
    navigate(`/`);
  };

  return (
    <div className="search">
      <input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for movies"
      />
      <img src={SearchIcon} alt="search" onClick={handleSearch} />
    </div>
  );
};

export default Search;
