import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CurrentNumber from './CurrentNumber';
import Board from './Board';

const mapStateToProps = (state) => {
  return {
    boardItems: state.boardItems,
    currentNumber: state.currentNumber,
    board: state.board
  };
};

const mapDispachToProps = dispatch => {
  return {
    pickNumber(number) {
      dispatch({ type: "NEXT_NUMBER", value: number });
    },
    createBoard(board) {
      dispatch({ type: "ADD_BOARD", value: board });
    }
  };
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friday Fun at 4:44 Bingo Time</h1>
        </header>{/* Hide create board when current number clicked */}
        <div className="App-body">
          <Board
            createBoard={this.props.createBoard}
            board={this.props.board}
            boardItems={this.props.boardItems}
          />
          <CurrentNumber
            pickNumber={this.props.pickNumber}
            boardItems={this.props.boardItems}
            currentNumber={this.props.currentNumber}
          />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);