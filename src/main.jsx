import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header>
      <img src="public/game-logo.png" alt="Hand-drawn tic tac toe game board" />
      <h1>Tic-Tac-Toe</h1>
    </header>
    <App />
  </StrictMode>,
)
