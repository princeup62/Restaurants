import React, { Component } from "react";
export class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      rating: "5",
      email: "",
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    fetch("http://localhost:3000/restaurant", {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    }).then((result) =>
      result.json().then((response) => {
        console.log(response);
        alert("Restaurant added...");
      })
    );

    // alert(this.state.rating);
  };

  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
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

export default RestaurantCreate;
