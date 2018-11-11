import * as actionTypes from '../actions/actionTypes';

const initialState = {
  mines: 99,
  table: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GENERATE_TABLE:
      return {
        ...state,
        table: [...action.table],
        mines: 99
      };
    case actionTypes.ADD_MINE:
      return {
        ...state,
        mines: action.mines + 1
      }
    case actionTypes.REMOVE_MINE:
      return {
        ...state,
        mines: action.mines - 1
      }
    default:
      return state;
  }
}

export default reducer;