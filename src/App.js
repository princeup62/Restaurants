import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faPlusSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
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
                  <FontAwesomeIcon icon={faHome} color="blue" /> Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link className="link" to="/list">
                  <FontAwesomeIcon icon={faList} color="blue" /> List
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link className="link" to="/create">
                  <FontAwesomeIcon icon={faPlusSquare} color="blue" /> Create
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link className="link" to="/search">
                  <FontAwesomeIcon icon={faSearch} color="blue" /> Search
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
