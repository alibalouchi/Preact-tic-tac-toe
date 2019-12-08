import style from './style.css';
import {checkWinner} from '../../assets/services/services'

const Square = (props) => {
	let winner

	const showWinner = (char) => {
		if (char){
			char == "D" ? window.alert("Draw") : window.alert(`${char} has won the game`);
			props.handleChange(Array(9).fill(null))
			winner = null
			props.winner(undefined)
		}
	}

	const handleClick = () => {
		let id = +props.id
		let board = props.board
		if(board[id]) 
			return;
		board[id] = props.xTurn ? "X" : "O"
		props.handleChange(board)
		props.turn(!props.xTurn)
		winner = checkWinner(board)
		if (winner){
			showWinner(winner)
		}
	}

	return (<div className={style.square} onClick={() => handleClick()}>
		{props.board[+props.id]}
	</div>)
};

export default Square;