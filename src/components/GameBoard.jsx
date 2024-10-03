
export default function GameBoard({ symbolToggle, board }) {

    // const [gameBoard, setBoard] = useState(initialBoard);
    //
    // function markBoard(row, col) {
    //     setBoard(
    //         (currBoard) => {
    //                 const newBoard = [...currBoard.map((elem) => [...elem])];
    //                 newBoard[row][col] = playerSymbol
    //                 return newBoard;
    //                 }
    //             )
    //     symbolToggle()
    // }

    return (
        <>
            <ol id="game-board">
                {board.map((row, rowInd) =>
                    <li key={rowInd}>
                        <ol>
                            {row.map((symbols, colInd) =>
                                <li key={colInd}>
                                    <button
                                        onClick={() => symbolToggle(rowInd, colInd)}
                                        disabled={symbols !== null}>
                                        {symbols}
                                    </button>
                                </li>
                            )}
                        </ol>
                    </li>
                )}
            </ol>
        </>
    )
}