import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    fetch("https://60b447904ecdc100174805e6.mockapi.io/Restaurants").then(
      (response) =>
        response.json().then((result) => {
          this.setState({ list: result });
        })
    );
  }

  delete = (id) => {
    fetch(`https://60b447904ecdc100174805e6.mockapi.io/Restaurants/${id}`, {
      method: "DELETE",
    }).then(() => {
      let tempArray = this.state.list.filter((el) => el.id !== id);
      this.setState({ list: [...tempArray] });
    });
  };

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
                        <Link
                          className="link text-light"
                          to={"/update/" + item.id}
                        >
                          <FontAwesomeIcon icon={faEdit} color="orange" />
                        </Link>

                        <FontAwesomeIcon
                          icon={faTrash}
                          color="red"
                          className="mx-3"
                          onClick={() => this.delete(item.id)}
                          id={item.id}
                        />
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
