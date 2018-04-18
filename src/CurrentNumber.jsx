import React, { Component } from 'react';
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
            let number = setNumber(this.props.boardItems);
            this.props.pickNumber(number);
          }}
        >
        Next Number
        </button>
      </div>
    );
  }
}

export default CurrentNumber;