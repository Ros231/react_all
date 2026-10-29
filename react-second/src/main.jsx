import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './home.jsx'
import Second from './Second.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <App />
    <Second />
  </StrictMode>,
)
