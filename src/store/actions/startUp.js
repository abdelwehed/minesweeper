import * as actionTypes from './actionTypes';

export const generateTable = (table) => {
  return {
    type: actionTypes.GENERATE_TABLE,
    table: table,
  }
}

export const initGame = () => {
  return dispatch => {
    const temp = [];
    for (let i = 0; i< 480 ; i++) {
      temp.push(0);
    }
    dispatch(generateTable(temp));
  }
}

export const addMine = (mines) => {
  return {
    type: actionTypes.ADD_MINE,
    mines: mines
  }
}

export const removeMine = (mines) => {
  return {
    type: actionTypes.REMOVE_MINE,
    mines: mines
  }
}