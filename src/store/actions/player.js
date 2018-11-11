import * as actionTypes from './actionTypes';
import axios from '../../lib/api';

export const addPlayer = ( player ) => {
  return {
      type: actionTypes.ADD_PLAYER,
      player: player
  };
}

export const setPlayersList = (list) => {
  return {
    type: actionTypes.SET_PLAYERS,
    playersList: list
  }
}

export const fetchPlayersError = (err) => {
  return {
    type: actionTypes.FETCH_PLAYERS_ERROR,
    error: err
  }
}

export const getPlayers = () => {
  return dispatch => {
      axios.get()
          .then( response => {
             dispatch(setPlayersList(response.data));
          } )
          .catch( error => {
              dispatch(fetchPlayersError(error));
          } );
  };
};