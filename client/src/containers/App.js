import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import axios from 'axios';

//component imports
import Header from "../components/containerComps/header/header";
import Saved from "../components/savedPage/saved";
import Search from "../components/searchPage/search";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: []
    };
  }

  searchClickHandler(bookTitle) {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + bookTitle)
      .then(res => {
        let newState = [res];
        this.setState({bookList: newState})
        console.log("response: " + res);
        console.log("new state: " + this.state.bookList);
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/search">
              <Search click={this.searchClickHandler} />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/">
              <Search click={this.searchClickHandler} />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
