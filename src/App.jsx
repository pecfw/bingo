import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import CurrentNumber from './CurrentNumber';
import Board from './Board';

const mapStateToProps = state => {
  return {
    boardItems: state.boardItems,
    currentNumber: state.currentNumber,
  };
};

const mapDispachToProps = dispatch => {
  return {
    pickNumber(number) {
      dispatch({ type: 'NEXT_NUMBER', value: number });
    },
    createBoard(board) {
      dispatch({ type: 'ADD_BOARD', value: board });
    },
  };
};

const App = ({ createBoard, boardItems, pickNumber, currentNumber }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Friday Fun at 4:44 Bingo Time</h1>
      </header>
      {/* Hide create board when current number clicked */}
      <div className="App-body">
        <div className="App-boards">
          {/*map array of boards*/}
          <Board createBoard={createBoard} boardItems={boardItems} />
        </div>
        <CurrentNumber
          pickNumber={pickNumber}
          boardItems={boardItems}
          currentNumber={currentNumber}
        />
      </div>
    </div>
  );
};

App.defaultProps = {
  currentNumber: null,
};

App.propTypes = {
  createBoard: PropTypes.func.isRequired,
  boardItems: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
  pickNumber: PropTypes.func.isRequired,
  currentNumber: PropTypes.number,
};

export default connect(mapStateToProps, mapDispachToProps)(App);
