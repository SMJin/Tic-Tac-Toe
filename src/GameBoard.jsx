import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSqure, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    const handleSelectSqure = (rowIndex, colIndex) => {
        if (gameBoard[rowIndex][colIndex] !== null) return;
        
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