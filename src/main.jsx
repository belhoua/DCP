import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Safety net: never let the preloader stay stuck if something goes wrong.
setTimeout(() => {
  const pl = document.getElementById('app-preloader')
  if (pl && !pl.classList.contains('hide')) {
    pl.classList.add('hide')
    setTimeout(() => pl.remove(), 700)
  }
}, 15000)
