import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "./Board";
import * as actions from '../../actions/BoardActions';

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  let boardId;
  let card;
  if (ownProps.match.params[0] === 'boards') {
    boardId = +ownProps.match.params.id;
  } else {
    card = state.cards.find(card => card.id === +ownProps.match.params.id);
    if (card) {
      boardId = card.board_id;
    } else {
      boardId = null;
    }
  }

  return {
    board: state.boards.find(board => board.id === boardId),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchBoard: (boardId) => {
      dispatch(actions.fetchBoard(boardId))
    }
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     dispatch: dispatch,
//   }
// }

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//   let boardId;
//   let card;
//   if (ownProps.match.params[0] === 'boards') {
//     boardId = +ownProps.match.params.id;
//   } else {
//     card = stateProps.state.cards.find(card => card.id === +ownProps.match.params.id);
//     if (card) {
//       boardId = card.board_id;
//     } else {
//       boardId = null;
//     }
//   }

//   return {
//     ...stateProps,
//     onFetchBoard: () => {
//       dispatchProps.dispatch(actions.fetchBoard(boardId))
//     }
//   }

// }


class BoardContainer extends Component {

  componentDidMount() {
    // this.props.onFetchBoard()
    if (this.props.match.params[0] === 'boards') {
      this.props.onFetchBoard(+this.props.match.params.id);
    } else {
      // this.props.onFetchBoard()
    }
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

