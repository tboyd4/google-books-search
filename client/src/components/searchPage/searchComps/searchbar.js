import React from "react";

function SearchBar(props) {
  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Search books titles"
        aria-label="Books"
        aria-describedby="button-addon2"
      ></input>
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary primary"
          type="button"
          id="button-addon2"
          onClick={((event) => props.click(this.event.target.value))} // stuck here
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
