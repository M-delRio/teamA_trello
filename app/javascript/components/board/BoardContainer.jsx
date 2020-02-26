import React, { Component } from "react";
import connect from "react-redux";
import Board from "./Board";

class BoardContainer extends Component {
  render() {
    return <Board />;
  }
}

export default BoardContainer;