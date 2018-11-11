import * as actionTypes from '../actions/actionTypes';

const initialState = {
  mines: 99,
  counter: null,
  playersList: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYERS:
      const newPlayer = action.playersList.sort((a, b) => b.score - a.score)
      return {
        ...state,
        playersList: newPlayer,
      };
    case actionTypes.ADD_PLAYER:
      return {
        ...state,
        player: action.player
      };
    case actionTypes.FETCH_PLAYERS_ERROR:
      return {
        ...state,
       error: action.error
      }
    default:
      return state;
  }
}

export default reducer;