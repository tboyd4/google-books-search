import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//component imports
import Header from "../components/containerComps/header/header";
import Saved from "../components/savedPage/saved";
import Search from "../components/searchPage/search";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
