import React, { Component } from "react";

export class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = { name: "", address: "", rating: "", email: "" };
  }

  componentDidMount() {
    fetch(
      `https://60b447904ecdc100174805e6.mockapi.io/Restaurants/${this.props.match.params.profile_id}`
    ).then((response) =>
      response.json().then((result) => {
        this.setState({ ...result });
      })
    );
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    fetch(
      `https://60b447904ecdc100174805e6.mockapi.io/Restaurants/${this.props.match.params.profile_id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state),
      }
    ).then((result) =>
      result.json().then((response) => {
        console.log(response);
        alert("Restaurant updated...");
      })
    );
  };

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <h4 className="my-3 text-center">Update Restaurants Lists</h4>
          <div className="col-md-6 mx-auto">
            <form onSubmit={(evt) => this.handleSubmit(evt)}>
              <div className="mb-3">
                <label className="form-label">Restaurant Name :</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="form-control"
                  onChange={(evt) => this.handleChange(evt)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email :</label>
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  className="form-control"
                  onChange={(evt) => this.handleChange(evt)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Rating :</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name="rating"
                  onChange={(evt) => this.handleChange(evt)}
                  value={this.state.rating}
                >
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3</option>
                  <option value="3.5">3.5</option>
                  <option value="4">4</option>
                  <option value="4.5">4.5</option>
                  <option value="5">5</option>
                </select>
              </div>

              <div className="mb-3">
                <label name="address" className="form-label">
                  Address :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={this.state.address}
                  onChange={(evt) => this.handleChange(evt)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantUpdate;
