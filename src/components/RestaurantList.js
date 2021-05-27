import React, { Component } from "react";

export class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
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
      <>
        {this.state.list ? (
          this.state.list.map((el) => <div>hello</div>)
        ) : (
          <p>null</p>
        )}
      </>
    );
  }
}

export default RestaurantList;
