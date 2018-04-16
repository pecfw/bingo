import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import rootReducer from 'reducers';


//////////////////////
///// Index.js  //////
//////////////////////

const boardItems = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

const board = {
  1: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  2: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  3: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  4: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  5: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  6: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  7: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  8: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  },
  9: {
    1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
    11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: ''
  }
};

const initialState = {
    currentNumber: null,
    boardItems: boardItems,
    board: board
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT_NUMBER":
            return {
                ...state,
                currentNumber: action.value
            }
        case "ADD_BOARD":
            return {
                ...state,
                board: action.value
            }
        case "RESTART_GAME":
            return {state: initialState}
        default:
            return state
    }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const recursivePickNumber = (max, array) => {

    const number = Math.floor(Math.random() * max); //(max - min + 1) + min;
    if (array.indexOf(number) > -1) {
        array.splice(array.indexOf(number), 1);
        return number
    } else {
        return recursivePickNumber(max, array)
    }
}




///////////////////////
///// Current No //////
///////////////////////

const setNumber = (boardItems) => {
    return recursivePickNumber(91, boardItems)
}

const CurrentNumber = (props) => {
    return <div>
            <p>{props.currentNumber}</p>
            <button onClick={(event) => {
                    event.preventDefault();
                    let number = setNumber(props.boardItems);
                    props.pickNumber(number);
                }}>
                Next Number
            </button>
        </div>
}




///////////////////////
/////   Board    //////
///////////////////////

//Doesn't take into consideration the six boards per ticket and 15 numbers per ticket

const setBoard = (board) => {
    column(1, 1, 11, board);
    column(2, 11, 21, board);
    column(3, 21, 31, board);
    column(4, 31, 41, board);
    column(5, 41, 51, board);
    column(6, 51, 61, board);
    column(7, 61, 71, board);
    column(8, 71, 81, board);
    column(9, 81, 91, board);

    return board
}

const column = (y, lowestNumber, highestNumber, board) => {
  let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  for (var i = lowestNumber; i < highestNumber; i++) {
    let number = recursivePickNumber(19, arrayNumbers)
    board[y][number] = i;
  }
  return board
}

const row = (board) => {
  for (let i = 1; i < 19; i++) {
    return <tr>{board[1][i]+" "+
    board[2][i] + " " +
    board[3][i] + " " +
    board[4][i] + " " +
    board[5][i] + " " +
    board[6][i] + " " +
    board[7][i] + " " +
    board[8][i] + " " +
    board[9][i]
  }</tr>
  }
}

const PrintBoard = (props) => {
    return (<div>
        <button onClick={(board) => {
                var board = setBoard(props.board)
                
                props.createBoard(board)
                row(props.board)
            }}>
            New Board
        </button>
        <table>
            <tbody>
                {row(props.board)}
            </tbody>
        </table>
    </div >)
}




///////////////////////
/////   Restart   //////
///////////////////////


var RestartGame = (props) => {
  return (
    <button >
      {/* onClick={store.dispatch({ type: "RESTART_GAME", value: '' })}> */}
      Restart Game
    </button>
  )
}




//////////////////////
/////   Bingo   //////
//////////////////////


export class Bingo extends Component {
    render() {
        return <div>
            <CurrentNumber pickNumber={this.props.pickNumber} boardItems={this.props.boardItems} currentNumber={this.props.currentNumber}/>
            <PrintBoard createBoard={this.props.createBoard} board={this.props.board}/>
            <RestartGame />
        </div>
    }
}




//////////////////////
///// Container //////
//////////////////////


const pickNumber = (number) => {
    return store.dispatch({type: "NEXT_NUMBER", value: number})
}

const createBoard = (board) => {
    return (store.dispatch({type: "ADD_BOARD", value: board}))
}

const mapStateToProps = (state) => {
    return {boardItems: state.boardItems, currentNumber: state.currentNumber, board: state.board}
}

const mapDispachToProps = (state) => {
    return {pickNumber, createBoard}
}

const Container = connect(mapStateToProps, mapDispachToProps)(Bingo)




//////////////////////
/////    App    //////
//////////////////////


const App = (props) => {
    return (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Friday Fun at 4:44 Bingo Time</h1>
        </header>
        <Container/>
    </div>)
}

ReactDOM.render(<Provider store={store}>
    <App></App>
</Provider>, document.getElementById('app'))

export default App;