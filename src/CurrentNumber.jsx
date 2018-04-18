import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { recursivePickNumber } from './index';

const setNumber = (boardItems) => {
  return recursivePickNumber(91, boardItems);
};

class CurrentNumber extends Component {
  render() {
    return (
      <div>
        <p>{this.props.currentNumber}</p>
        <button
          className="CurrentNumber-button"
          onClick={(event) => {
            event.preventDefault();
            this.props.pickNumber(setNumber(this.props.boardItems));
          }}
        >
        Next Number
        </button>
      </div>
    );
  }
}

CurrentNumber.defaultProps = {
  currentNumber: null
};

CurrentNumber.propTypes = {
  boardItems: PropTypes.arrayOf(PropTypes.number).isRequired,
  pickNumber: PropTypes.func.isRequired,
  currentNumber: PropTypes.number
};

export default CurrentNumber;