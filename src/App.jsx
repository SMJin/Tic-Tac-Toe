import { useState } from 'react'
import './App.css'
import GameBoard from './GameBoard'

import Player from './Player'
import Log from './Log';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const handleSelectSqure = (rowIndex, colIndex) => {
    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
    setGameTurns(prev => {
      let currentPlayer = 'X';

      if (prev.length > 0 && prev[0].player === 'X') {
        currentPlayer = 'O';
      }

      console.log("currentPlayer: ", currentPlayer);

      const next = [  // if you want to change array, use immutable way.
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prev,
      ];

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
