import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header_Menu from './Components/Header_Menu/Header_Menu'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header_Menu />
    <App />
  </React.StrictMode>,
)
