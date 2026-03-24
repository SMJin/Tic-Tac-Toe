import { useState } from 'react'
import './App.css'
import GameBoard from './components/GameBoard'

import Player from './components/Player'
import Log from './components/Log';

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let activePlayer = deriveActivePlayer(gameTurns);

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

      <GameBoard onSelectSqure={handleSelectSqure} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
