export default function GameBoard({ onSelectSqure, gameBoard }) {
    // let gameBoard = initialGameBoard;

    // for (const turn of turns) {
    //     const { square, player } = turn;
    //     const { row, col } = square;

    //     gameBoard[row][col] = player;
    // }

    const handleSelectSqure = (rowIndex, colIndex) => {
        // if (gameBoard[rowIndex][colIndex] !== null) return; // if already clicked, not active.
        
        onSelectSqure(rowIndex, colIndex);
    }

    return <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                {row.map((playerSymbol, colIndex) => (
                    <li key={colIndex}>
                        <button 
                            onClick={() => handleSelectSqure(rowIndex, colIndex)}
                            // value={gameBoard[rowIndex][colIndex]}
                            disabled={gameBoard[rowIndex][colIndex] !== null}   // if already clicked, not active.
                            >
                                {playerSymbol}
                        </button>
                    </li>
                ))}
                </ol>
            </li>
        ))}
    </ol>
}