import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./Board";
import * as actions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
  let boardId;

  if (ownProps.match.params[0] === 'boards') {
    boardId = +ownProps.match.params.id;
  } else {
    let card = state.cards.find(card => card.id === +ownProps.match.params.id);
    if (card) {
      boardId = card.board_id;
    }
  }

  return {
    board: state.boards.find(board => board.id === boardId),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let boardId;

  if (ownProps.match.params[0] === 'boards') {
    boardId = +ownProps.match.params.id
  }

  return {
    onFetchBoard: () => {
      if (boardId) {
        dispatch(actions.fetchBoard(boardId))
      }
    }
  }
}


class BoardContainer extends Component {

  componentDidMount() {
    this.props.onFetchBoard();
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

