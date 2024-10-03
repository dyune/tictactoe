import './App.css'
import './index.css'
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import {useState} from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function deriveTurn(state) {
    let currTurn = 'X'

    if (state.length > 0 && state[0].player === 'X') {
        currTurn = 'O'
    }
    return currTurn;
}

function App() {
    const [log, setLog] = useState([])
    let winner = undefined
    let currPlay = deriveTurn(log)
    let gameBoard = initialBoard

    for (const turn of log) {
        const {square, player} = turn
        const {row, col} = square
        gameBoard[row][col] = player
    }

    for (const pattern of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[pattern[0].row][pattern[0].column];
        const secondSquareSymbol = gameBoard[pattern[1].row][pattern[1].column];
        const thirdSquareSymbol = gameBoard[pattern[2].row][pattern[2].column];

        if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol
        }

    }

    function switchPlay (rowIndex, colIndex) {

        //setPlay((activePlay) => activePlay === 'X' ? 'O' : 'X')
        setLog((currLog) => {
                const currTurn = deriveTurn(currLog)

                return [{square: {row: rowIndex, col: colIndex}, player: currTurn}, ...currLog]
            }
        )
    }

    return (
        <>
            <main>
                <div id="game-container">
                    <ol id="players" className="highlight-player">
                        <Player initName="Player 1" symbol="X" isTurn={currPlay === 'X'}/>
                        <Player initName="Player 2" symbol="O" isTurn={currPlay === 'O'}/>
                    </ol>
                    {winner && <p>{winner} wins!</p>}
                    <GameBoard symbolToggle={switchPlay}
                               board={gameBoard}
                    />
                </div>
                <Log
                    data={log}
                />
            </main>
        </>
    )
}

export default App
