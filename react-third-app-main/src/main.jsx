import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import Home from './pages/Home.jsx'
// import Hello from './pages/Hello.jsx'
// import Hi from './pages/Hi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
