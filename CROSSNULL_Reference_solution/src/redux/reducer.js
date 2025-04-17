import { createEmptyField } from '../utils/create-empty-field';
import { STATUS, PLAYER } from '../constants';

export const initialState = {
  status: STATUS.TURN,
  currentPlayer: PLAYER.CROSS,
  field: createEmptyField(),
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CURRENT_PLAYER':
      return { ...state, currentPlayer: payload };
    case 'SET_FIELD':
      return { ...state, field: payload };
    case 'SET_STATUS':
      return { ...state, status: payload };
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
};
