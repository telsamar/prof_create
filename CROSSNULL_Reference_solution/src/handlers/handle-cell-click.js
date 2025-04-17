import { store } from '../redux/store';
import { checkWin, checkEmptyCell } from '../utils';
import { STATUS, PLAYER } from '../constants';

export const handleCellClick = (cellIndex) => {
  const { status, field, currentPlayer } = store.getState();

  if (
    status === STATUS.WIN ||
    status === STATUS.DRAW ||
    field[cellIndex] !== PLAYER.NOBODY
  ) {
    return;
  }

  const newField = [...field];
  newField[cellIndex] = currentPlayer;

  store.dispatch({ type: 'SET_FIELD', payload: newField });

  if (checkWin(newField, currentPlayer)) {
    store.dispatch({ type: 'SET_STATUS', payload: STATUS.WIN });
  } else if (checkEmptyCell(newField)) {
    const nextPlayer = currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS;
    store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: nextPlayer });
  } else {
    store.dispatch({ type: 'SET_STATUS', payload: STATUS.DRAW });
  }
};
