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

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...initialGameBoard.map(array => [...array])];  // have to deep copy.

  for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;

      gameBoard[row][col] = player;
  }

  return gameBoard;
}

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

const deriveWinner = (gameBoard, players) => {
  let winner;

  for ( const COMBINATION of WINNING_COMBINATIONS ) {
      const firstSquareSymbol = gameBoard[COMBINATION[0].row][COMBINATION[0].column];
      const secondSquareSymbol = gameBoard[COMBINATION[1].row][COMBINATION[1].column];
      const thirdSquareSymbol = gameBoard[COMBINATION[2].row][COMBINATION[2].column];

      if (firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        // winner = firstSquareSymbol;
        winner = players[firstSquareSymbol];
      }
  }

  return winner;
}

function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  })
  const [gameTurns, setGameTurns] = useState([]);

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prev => {
      return {
        ...prev,
        [symbol]: newName,
      }
    })
  }

  let activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);
  let winner = deriveWinner(gameBoard, players);
  let hasDraw = gameTurns.length === 9 && !winner;

  const initGame = () => {
    setGameTurns([]);
    // gameBoard = [...initialGameBoard.map(array => [...array])];  // not nessesary.
  }

  const handleSelectSqure = (rowIndex, colIndex) => {
    setGameTurns(prev => {
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
            <Player initialName={players.X} onChangeName={handlePlayerNameChange} symbol={`X`} isActive={activePlayer === 'X'} />
            <Player initialName={players.O} onChangeName={handlePlayerNameChange} symbol={`O`} isActive={activePlayer === 'O'} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} initGame={initGame} />}
        <GameBoard onSelectSqure={handleSelectSqure} gameBoard={gameBoard} />
      </div>
    
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
