import PropTypes from 'prop-types';
import { Information, Field } from './components';
import { store } from './redux/store';
import styles from './game.module.css';

export const GameLayout = ({ handleCellClick, handleRestart }) => {
  const { status, currentPlayer, field } = store.getState();

  return (
    <div className={styles.game}>
      <Information status={status} currentPlayer={currentPlayer} />
      <Field field={field} handleCellClick={handleCellClick} />
      <button className={styles.restartButton} onClick={handleRestart}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.propTypes = {
  handleCellClick: PropTypes.func,
  handleRestart: PropTypes.func,
};
