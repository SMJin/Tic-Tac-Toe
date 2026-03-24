import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'

import Player from './components/Player'
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false); // not nessessary.

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

  let activePlayer = deriveActivePlayer(gameTurns);

  let winner;

  for ( const COMBINATION of WINNING_COMBINATIONS ) {
      const firstSquareSymbol = gameBoard[COMBINATION[0].row][COMBINATION[0].column];
      const secondSquareSymbol = gameBoard[COMBINATION[1].row][COMBINATION[1].column];
      const thirdSquareSymbol = gameBoard[COMBINATION[2].row][COMBINATION[2].column];

      if (firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol;
      }
  }

  const handleSelectSqure = (rowIndex, colIndex) => {
    setGameTurns(prev => {
      // const currentPlayer = deriveActivePlayer(gameTurns);
      const currentPlayer = activePlayer;

      const next = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ]

      return next;
    });
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
            <Player initialName={`Player 1`} symbol={`X`} isActive={activePlayer === 'X'} />
            <Player initialName={`Player 2`} symbol={`O`} isActive={activePlayer === 'O'} />
        </ol>
        {winner && <GameOver winner={winner} />}
        <GameBoard onSelectSqure={handleSelectSqure} gameBoard={gameBoard} />
      </div>
    
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
