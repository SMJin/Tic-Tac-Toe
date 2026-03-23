import { useState } from 'react'
import './App.css'
import GameBoard from './GameBoard'

import Player from './Player'

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSqure = () => {
    setActivePlayer(prev => prev === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
            <Player initialName={`Player 1`} symbol={`X`} isActive={activePlayer === 'X'} />
            <Player initialName={`Player 2`} symbol={`O`} isActive={activePlayer === 'O'} />
        </ol>

      <GameBoard onSelectSqure={handleSelectSqure} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
