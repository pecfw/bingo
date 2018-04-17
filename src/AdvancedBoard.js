//Doesn't take into consideration the six boards per ticket and 15 numbers per ticket
// const setBoard = (board) => {
//     column(1, 1, 11, board);
//     column(2, 11, 21, board);
//     column(3, 21, 31, board);
//     column(4, 31, 41, board);
//     column(5, 41, 51, board);
//     column(6, 51, 61, board);
//     column(7, 61, 71, board);
//     column(8, 71, 81, board);
//     column(9, 81, 91, board);

//     return board
// }

// const column = (y, lowestNumber, highestNumber, board) => {
//     let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
//     for (var i = lowestNumber; i < highestNumber; i++) {
//         let number = recursivePickNumber(19, arrayNumbers)
//         board[y][number] = i;
//     }
//     return board
// }

// const row = (board) => {
//     for (let i = 1; i < 19; i++) {
//         return <tr>{board[1][i] + " " +
//             board[2][i] + " " +
//             board[3][i] + " " +
//             board[4][i] + " " +
//             board[5][i] + " " +
//             board[6][i] + " " +
//             board[7][i] + " " +
//             board[8][i] + " " +
//             board[9][i]
//         }</tr>
//     }
// }