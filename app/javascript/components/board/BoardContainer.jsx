import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./Board";
import * as actions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.filter(board => board.id === +ownProps.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchBoard: () => {
      dispatch(actions.fetchBoard(+ownProps.match.params.id))
    }
  }
}


class BoardContainer extends Component {

  componentDidMount() {
    this.props.onFetchBoard()
  }

  render() {
    if (this.props.board) {
      return <Board board={this.props.board} />;
    } else {
      return null;
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);


// export default BoardContainer;

