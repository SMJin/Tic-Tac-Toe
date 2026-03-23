import { useState } from "react";
import BoardButton from "./BoardButton";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // let trial = 0;

    // const toggleTrial = () => {
    //     if (trial++ % 2 == 0) return 'O';
    //     else 'X';
    // }

    const handleSelectSqure = (rowIndex, colIndex) => {
        console.log(rowIndex, colIndex);
        setGameBoard(prev => {
            // const next = prev;   // if you want to change array, use immutable way.
            const next = [...prev.map(innerArray => [...innerArray])];
            next[rowIndex][colIndex] = 'X';
            return next;
        });
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