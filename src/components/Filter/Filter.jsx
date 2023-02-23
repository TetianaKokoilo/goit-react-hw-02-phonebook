import PropTypes from 'prop-types';

export const Filter = ({ filter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" onChange={filter} />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
}