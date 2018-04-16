import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import rootReducer from 'reducers';

const bingoNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
const bingoBoard = {
  1: {
    1: 'hi', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '',
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
  bingoCurrentNumber: null,
  bingoNumbers: bingoNumbers,
  bingoBoard: bingoBoard
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_NUMBER":
      return { ...state, bingoCurrentNumber: action.value }
    case "ADD_BOARD":
      return { ...state, bingoBoard: action.value }
    case "RESTART_GAME":
      return { state: initialState }
    default:
      return state
  }
}

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()))

const recursivePickNumber = (max, array) => {
  // if(!array)
  // console.log(array)
  const number = Math.floor(Math.random() * max);//(max - min + 1) + min;
  if (array.indexOf(number) > -1) {
    array.splice(array.indexOf(number), 1);
    return number
  } else {
    return recursivePickNumber(max, array)
  }
}

const setNumber = (bingoNumbers) => {
  return recursivePickNumber(91, bingoNumbers)
}

const pickNumber = (number) => {
  return store.dispatch({
    type: "NEXT_NUMBER",
    value: number
  })
}

var CurrentNumber = (props) => {
  return <div>
    <p>{props.bingoCurrentNumber}</p>
    <button onClick={(event) => {
      event.preventDefault();
      let number = setNumber(props.bingoNumbers);
      console.log('numbr', number)
      props.pickNumber(number)
    }}>
      Next Number
      </button>
  </div>
}

const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    bingoNumbers: state.bingoNumbers,
    bingoCurrentNumber: state.bingoCurrentNumber
  }
}

// var PrintBoard = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <button onClick={(bingoBoard) => props.createBoard(props.bingoBoard)}>
//         New Board
//       </button>
//       <table>
//         <tbody>
//           {(bingoBoard) => props.row(props.bingoBoard)}
//         </tbody>
//       </table>
//     </div >
//   )
// }

export class Bingo extends Component {
  render() {
    return <div>
      <CurrentNumber />
      {/* <PrintBoard /> */}
    </div>
  }
}

const Container = connect(mapStateToProps, pickNumber)(Bingo)

const App = (props) => {
  return (<div className="App">
    <header className="App-header">
      <h1 className="App-title">Friday Fun at 4:44 Bingo Time</h1>
    </header>
    <Container pickNumber={props.pickNumber} bingoNumbers={props.bingoNumbers} bingoCurrentNumber={props.bingoCurrentNumber} />
    {/* <CurrentNumber pickNumber={props.pickNumber} bingoNumbers={props.bingoNumbers} /> */}
    {/* <RestartGame /> */}
    {/* <PrintBoard createBoard={createBoard} /> */}
  </div>)
}

ReactDOM.render(
  <Provider store={store}>
    <App pickNumber={pickNumber}></App>
  </Provider>,
  document.getElementById('app')
)

export default App;
// const row = (bingoBoard) => {
//   for (let i = 1; i < 19; i++) {
//     console.log(bingoBoard[1][1])
//     return <tr>{bingoBoard[1][i]}</tr>
//     // bingoBoard[2][i] + " " +
//     // bingoBoard[3][i] + " " +
//     // bingoBoard[4][i] + " " +
//     // bingoBoard[5][i] + " " +
//     // bingoBoard[6][i] + " " +
//     // bingoBoard[7][i] + " " +
//     // bingoBoard[8][i] + " " +
//     //+" "+bingoBoard[9][i]

//   }
// }


// var RestartGame = (props) => {
//   return (
//     <button >
//       {/* onClick={store.dispatch({ type: "RESTART_GAME", value: '' })}> */}
//       Restart Game
//     </button>
//   )
// }
//Doesn't take into consideration the six boards per ticket and 15 numbers per ticket

// const column = (y, lowestNumber, highestNumber, bingoBoard) => {
//   let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
//   for (var i = lowestNumber; i < highestNumber; i++) {
//     let number = recursivePickNumber(19, arrayNumbers)
//     bingoBoard[y][number] = i;
//   }
//   return bingoBoard
// }

// const createBoard = (bingoBoard) => {
//   column(1, 1, 11, bingoBoard);
//   column(2, 11, 21, bingoBoard);
//   column(3, 21, 31, bingoBoard);
//   column(4, 31, 41, bingoBoard);
//   column(5, 41, 51, bingoBoard);
//   column(6, 51, 61, bingoBoard);
//   column(7, 61, 71, bingoBoard);
//   column(8, 71, 81, bingoBoard);
//   column(9, 81, 91, bingoBoard);
//   console.log(bingoBoard)
//   return (store.dispatch({
//     type: "ADD_BOARD",
//     value: bingoBoard
//   }))
// }