import React, { Component } from 'react';
import { recursivePickNumber } from './index';
///////////////////////
/////   Board    //////
///////////////////////

const setBoard = (board) => {
    return board
}

class Board extends Component {
    render() {
        return (
            <div>
                <button onClick={(board) => {
                    board = setBoard(this.props.board);
                    this.props.createBoard(board);
                    // row(props.board);
                }}>
                    New Board
                </button>
                <table>
                    <tbody>
                        {/* {row(props.board)} */}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Board