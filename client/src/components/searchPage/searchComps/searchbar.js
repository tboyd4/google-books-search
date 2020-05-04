import React from "react";
import axios from 'axios';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      bookList: []
    };
  }

  searchClickHandler(bookTitle) {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=AIzaSyAMsCS7JX-XFLfbH8n7z_u1feBdH8cwaeg`)
      .then(function (res) {
        // let newState = res.data;
        // this.setState({search: '', bookList: newState})
        console.log(res.data);
      })
  }

  searchChangeHandler(event) {
    let changingState = {...this.state};
    changingState.search = event.target.value;
    this.setState({...changingState});
    console.log(this.state.search)
  }

  render() {
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search books titles"
          aria-label="Books"
          aria-describedby="button-addon2"
          onChange={() => this.searchChangeHandler}
        ></input>
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary primary"
            type="button"
            id="button-addon2"
            onClick={() => this.searchClickHandler('harry')}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
