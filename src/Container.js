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