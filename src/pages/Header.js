import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = ({ searchMovies }) => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="home-link">
          Trang Chủ
        </Link>
        <Search searchMovies={searchMovies} />
      </div>
    </header>
  );
};

export default Header;
