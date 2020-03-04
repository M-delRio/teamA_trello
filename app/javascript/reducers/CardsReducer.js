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

    case types.FETCH_CARD_SUCCESS:
      const foundCard = state.find(card => card.id === action.card.id);
      if (foundCard) {
        return state.map(card => card.id === action.card.id ? action.card : card)
      } else {
        return state.concat(action.card);
      }
  }
  return state;
}