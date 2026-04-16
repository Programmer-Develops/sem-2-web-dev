import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeContext } from './Components/ThemeContext'

createRoot(document.getElementById('root')).render(
  <ThemeContext.Provider value={{color:"blue"}}>
    <App />
  </ThemeContext.Provider>,
)
