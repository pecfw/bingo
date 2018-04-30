import React, { Component } from 'react';
import PropTypes from 'prop-types';
import recursivePickNumber from './index';

const board = {
  1: { 1: null, 2: null, 3: null, 4: null, 5: null },
  2: { 1: null, 2: null, 3: null, 4: null, 5: null },
  3: { 1: null, 2: null, 3: null, 4: null, 5: null },
  4: { 1: null, 2: null, 3: null, 4: null, 5: null },
  5: { 1: null, 2: null, 3: null, 4: null, 5: null },
};

// const boards = [board];

const setColumn = (y, lowestNumber, highestNumber, board, items) => {
  for (var x = 1; x < 6; x++) {
    let item = recursivePickNumber(highestNumber, items, lowestNumber);
    board[y][x] = item[0].number;
  }
  return board;
};

const setBoard = (board, boardItems) => {
  const items = [...boardItems];
  const numberOfItems = boardItems.length;
  const numberOfItemsPerColumn = numberOfItems / 5;
  for (let y = 1; y < 6; y++) {
    setColumn(
      y,
      (y - 1) * numberOfItemsPerColumn,
      y * numberOfItemsPerColumn,
      board,
      items
    );
  }
  board[3][3] = '*';
  return board;
};

const DisplayBoard = () => {
  let row = [];
  for (let x = 1; x < 6; x++) {
    let element = [];
    for (let y = 1; y < 6; y++) {
      element.push(<td key={y}>{board[y][x]}</td>);
    }
    row.push(<tr key={x}>{element}</tr>);
  }
  return row;
};

class Board extends Component {
  constructor() {
    super();
    this.state = { showResults: false };
    //board in here instead of index
  }

  render() {
    return (
      <div>
        <button
          className="Board-button"
          onClick={e => {
            e.preventDefault();
            this.props.createBoard(setBoard(board, this.props.boardItems));
            this.setState({ showResults: true });
            //this.boards.push()// boards as a prop instead of board
          }}
        >
          New Board
        </button>
        {this.state.showResults ? (
          //for loop
          <div className="Board-table">
            <table>
              <tbody>
                <DisplayBoard />
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    );
  }
}

Board.propTypes = {
  createBoard: PropTypes.func.isRequired,
  boardItems: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Board;
