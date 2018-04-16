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