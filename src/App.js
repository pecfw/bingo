import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import CurrentNumber from './CurrentNumber';
import PrintBoard from './Board';
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


const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Friday Fun at 4:44 Bingo Time</h1>
      </header>
      <CurrentNumber pickNumber={props.pickNumber} boardItems={props.boardItems} currentNumber={props.currentNumber} />
      <PrintBoard createBoard={props.createBoard} board={props.board} />
      <RestartGame />
    </div>)
}

export default connect(mapStateToProps, mapDispachToProps)(App);