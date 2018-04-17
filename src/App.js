import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import CurrentNumber from './CurrentNumber';
import Board from './Board';
import RestartGame from './Restart';

const mapStateToProps = (state) => {
  return { boardItems: state.boardItems, currentNumber: state.currentNumber, board: state.board }
}

const mapDispachToProps = dispatch => {
  return {
    pickNumber(number) {
      dispatch({ type: "NEXT_NUMBER", value: number })
    },
    createBoard(board) {
      dispatch({ type: "ADD_BOARD", value: board })
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friday Fun at 4:44 Bingo Time</h1>
        </header>
        <CurrentNumber pickNumber={this.props.pickNumber} boardItems={this.props.boardItems} currentNumber={this.props.currentNumber} />
        <Board createBoard={this.props.createBoard} board={this.props.board} />
        <RestartGame />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);