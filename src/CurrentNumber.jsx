import React from 'react';
import PropTypes from 'prop-types';
import recursivePickNumber from './index';

const setNumber = boardItems => {
  let item = recursivePickNumber(51, boardItems);
  return item[0].number + ' ' + item[0].name;
};

const CurrentNumber = ({ boardItems, pickNumber, currentNumber }) => {
  return (
    <div>
      <p>{currentNumber}</p>
      <button
        className="CurrentNumber-button"
        onClick={event => {
          event.preventDefault();
          pickNumber(setNumber(boardItems));
        }}
      >
        Next Number
      </button>
    </div>
  );
};

CurrentNumber.defaultProps = {
  currentNumber: null,
};

CurrentNumber.propTypes = {
  boardItems: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  pickNumber: PropTypes.func.isRequired,
  currentNumber: PropTypes.number,
};

export default CurrentNumber;
