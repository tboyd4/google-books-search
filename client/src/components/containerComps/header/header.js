import React from "react";
import './header.css';

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark text-light">
      <div className="container">
        <h1 className="display-4">Are You The Book I've Been Searching For?</h1>
        <p className="lead">
          Book Search Engine, powered by Google Books API
        </p>
        <a href="/search" className="btn btn-primary btn-lg links" role="button">Search</a>
        <a href="/saved" className="btn btn-primary btn-lg links" role="button">Saved</a>
      </div>
    </div>
  );
}

export default Header;
