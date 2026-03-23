import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSqure, activePlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleSelectSqure = (rowIndex, colIndex) => {
        console.log(rowIndex, colIndex);
        setGameBoard(prev => {
            // const next = prev;   // if you want to change array, use immutable way.
            const next = [...prev.map(innerArray => [...innerArray])];
            next[rowIndex][colIndex] = activePlayerSymbol;
            return next;
        });

        onSelectSqure();
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