import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((response) =>
      response.json().then((result) => {
        this.setState({ list: result });
      })
    );
  }

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <h4 className="my-3 text-center">Restaurants Lists</h4>
          <div className="col-md-11 mx-auto">
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Address</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.rating}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn btn-info ">
                          <Link
                            className="link text-light"
                            to={"/update/" + item.id}
                          >
                            Update
                          </Link>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantList;
