import * as types from '../constants/ActionTypes';


export default function listsReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      return action.board.lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      })
    case types.CREATE_LIST_SUCCESS:
      return state.concat(action.list)
  }

  return state
}


