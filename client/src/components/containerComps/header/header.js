import React from "react";
import './header.css';

function Header() {
  return (
    <div class="jumbotron jumbotron-fluid bg-dark text-light">
      <div class="container">
        <h1 class="display-4">Are You The Book I've Been Searching For?</h1>
        <p class="lead">
          Book Search Engine, powered by Google Books API
        </p>
        <a href="/search" class="btn btn-primary btn-lg links" role="button">Search</a>
        <a href="/saved" class="btn btn-primary btn-lg links" role="button">Saved</a>
      </div>
    </div>
  );
}

export default Header;
