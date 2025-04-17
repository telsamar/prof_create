import { useEffect, useState } from 'react';
import { GameLayout } from './game-layout';
import { handleCellClick, handleRestart } from './handlers';
import { store } from './redux/store';

export const Game = () => {
  const [, forceRender] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceRender(x => x + 1);
    });
    return () => unsubscribe();
  }, []);

  return (
    <GameLayout
      handleCellClick={(cellIndex) => handleCellClick(cellIndex)}
      handleRestart={() => handleRestart()}
    />
  );
};
