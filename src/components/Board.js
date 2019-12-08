import {useState} from 'preact/hooks';
import Square from '../components/square';

const Board = () => {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xTurn, setXTurn] = useState(false)
	const [winner, setWinner] = useState(null)

	if (winner){
		winner != "D" ? window.alert(`${winner} has won the game`) : window.alert("Draw")
		setBoard(Array(9).fill(null))
	}

	return (<div className="container">
		<div className="row">
			<Square id="0" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square id="1" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square id="2" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
		</div>
		<div className="row">
			<Square id="3" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square id="4" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square id="5" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
		</div>
		<div className="row">
			<Square id="6" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square id="7" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square id="8" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
		</div>
	</div>)
}

export default Board