import {useState} from 'preact/hooks';
import Square from '../components/square';

const Board = () => {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [xTurn, setXTurn] = useState(false)
	const [winner, setWinner] = useState(Array(9).fill(false))

	const handleReset = () => {
		setBoard(Array(9).fill(null))
		setWinner(Array(9).fill(false))
	}

	return (<div className="container">
		Current Turn is : {xTurn ? "X" : "O"}
		<div className="row">
			<Square win={winner} className={winner[0]} id="0" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square win={winner} className={winner[1]} id="1" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square win={winner} className={winner[2]} id="2" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
		</div>
		<div className="row">
			<Square win={winner} className={winner[3]} id="3" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square win={winner} className={winner[4]} id="4" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square win={winner} className={winner[5]} id="5" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
		</div>
		<div className="row">
			<Square win={winner} className={winner[6]} id="6" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square win={winner} className={winner[7]} id="7" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
			<Square win={winner} className={winner[8]} id="8" winner={setWinner} xTurn={xTurn} board={board} handleChange={(nextBoard) => setBoard(nextBoard)} turn={(xturn) => setXTurn(xturn)} />
		</div>
		<button className="button" onClick={() => handleReset()}>Reset The Game</button>
	</div>)
}

export default Board