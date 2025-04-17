import PropTypes from 'prop-types';
import { FieldLayout } from './field-layout';
import { store } from '../../redux/store';

export const Field = ({ handleCellClick }) => {
  const { field } = store.getState();
  return <FieldLayout field={field} handleCellClick={handleCellClick} />;
};

Field.propTypes = {
  handleCellClick: PropTypes.func,
};
