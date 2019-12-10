import style from './style.css';
import {checkWinner} from '../../assets/services/services'

const Square = (props) => {

	const handleClick = () => {
		let id = +props.id
		let board = props.board
		let winner = Array(9).fill(false)
		if(board[id]) return;
		if(props.win.find(item => item == true)) return;
		board[id] = props.xTurn ? "X" : "O"
		props.handleChange(board)
		props.turn(!props.xTurn)
		let indexes = checkWinner(board)
		indexes.map(item => winner[item] = true)
		props.winner(winner)
	}

	return (<div className={props.className == true ? style.winner : style.square} onClick={() => handleClick()}>
		{props.board[+props.id]}
	</div>)
};

export default Square;