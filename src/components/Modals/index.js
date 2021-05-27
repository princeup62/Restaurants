import React, { Component } from "react";
import Mod from "./Mod";

class ModIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpen = () => {
    this.setState({ ...this.state, open: true });
  };

  handleClose = () => {
    this.setState({ ...this.state, open: false });
  };

  render() {
    return (
      <>
        <button type="button" onClick={() => this.handleOpen()}>
          react-transition-group
        </button>

        <Mod open={this.state.open} handleClose={() => this.handleClose()} />
      </>
    );
  }
}

export default ModIndex;
