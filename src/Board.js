import React, { Component } from 'react';
import { recursivePickNumber } from './index';
///////////////////////
/////   Board    //////
///////////////////////

const setColumn = (y, lowestNumber, highestNumber, board, items) => {
    for (var x = 1; x < 6; x++) {
        let item = recursivePickNumber(highestNumber, items, lowestNumber)
        board[y][x] = item;
    }
    return board
}

const setBoard = (board, boardItems) => {
    const items = [...boardItems]
    const numberOfItems = boardItems.length
    const numberOfItemsPerColumn = numberOfItems / 5
    for (let y = 1; y < 6; y++) {
        setColumn(y, ((y - 1) * numberOfItemsPerColumn), y * numberOfItemsPerColumn, board, items)
    }
    board[3][3] = '*'
    return board
}

class PrintBoard extends Component {
    render() {
        let row = []
        for (let x = 1; x < 6; x++) {
            row.push(
                <tr key={x}>
                    <td>{this.props.board[1][x]}</td>
                    <td>{this.props.board[2][x]}</td>
                    <td>{this.props.board[3][x]}</td>
                    <td>{this.props.board[4][x]}</td>
                    <td>{this.props.board[5][x]}</td>
                </tr>
            )
        }
        return row
    }
}

class Board extends Component {
    constructor() {
        super()
        this.state = { showResults: false }
    }

    render() {
        return (
            <div>
                <button onClick={(board) => {
                    board = setBoard(this.props.board, this.props.boardItems);
                    this.props.createBoard(board);
                    this.setState({ showResults: true });
                }}>
                    New Board
                </button>
                {this.state.showResults ?
                    <div className="Board-table">
                        <table>
                            <tbody>
                                <PrintBoard board={this.props.board} />
                            </tbody>
                        </table>
                    </div>
                    : null}
            </div >
        )
    }
}

export default Board