import { PLAYER } from '../constants';

export const checkEmptyCell = (field) => field.some(cell => cell === PLAYER.NOBODY);
