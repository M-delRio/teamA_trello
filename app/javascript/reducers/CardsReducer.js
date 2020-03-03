import * as types from '../constants/ActionTypes';

export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      return action.board.lists.reduce(
        (allCards, list) => {
          return allCards.concat(list.cards);
        },
        []
      )
    case types.CREATE_CARD_SUCCESS:
      return state.concat(action.card);
  }
  return state;
}