import * as types from '../constants/ActionTypes';


export default function listsReducer(state = [], action) {
  switch (action.type) {
    case types.FETCH_BOARD_SUCCESS:
      const { lists, ...boardWithoutLists } = action.board;

      listsWithoutCards = lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      })
      console.log(listsWithoutCards)
      return state.concat(listsWithoutCards);
  }

  return state
}


