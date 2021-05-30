import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import { Navbar, Nav } from "react-bootstrap";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">Resto</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto ">
              <Nav.Link href="#home">
                <Link className="link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link className="link" to="/list">
                  List
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link className="link" to="/create">
                  Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link className="link" to="/search">
                  Search
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link className="link" to="/update">
                  Update
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <ul>
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
        </ul> */}

        <Route exact path="/" component={Home} />

        <Route path="/list" component={RestaurantList} />

        <Route path="/create" component={RestaurantCreate} />

        <Route path="/search" component={RestaurantSearch} />

        <Route path="/details" component={RestaurantDetail} />

        <Route path="/update/:profile_id" component={RestaurantUpdate} />
      </Router>
    );
  }
}

export default App;
