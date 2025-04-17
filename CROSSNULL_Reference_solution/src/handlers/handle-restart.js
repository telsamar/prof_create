import { store } from '../redux/store';

export const handleRestart = () => {
  store.dispatch({ type: 'RESTART_GAME' });
};
