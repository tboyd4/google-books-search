import React from "react";

import SearchBar from './searchComps/searchbar';

function Search(props) {
  return (
    <div class="container"> 
      <SearchBar click={props.click} />

    </div>
  );
}

export default Search;
