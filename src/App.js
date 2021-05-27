import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";

export class App extends Component {
  render() {
    return (
      <>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/details">RestaurantDetail</Link>
            </li>
            <li>
              <Link to="/update">Update</Link>
            </li>
          </ul>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <RestaurantList />
          </Route>
          <Route path="/create">
            <RestaurantCreate />
          </Route>
          <Route path="/search">
            <RestaurantSearch />
          </Route>
          <Route path="/details">
            <RestaurantDetail />
          </Route>
          <Route path="/update">
            <RestaurantUpdate />
          </Route>
        </Router>
      </>
    );
  }
}

export default App;
