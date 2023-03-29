import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header_Menu from './Components/Header_Menu/Header_Menu'
import './index.scss'
import SSRProvider from 'react-bootstrap/SSRProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>

    <Header_Menu />

    <SSRProvider>
      <App />
    </SSRProvider>

  </React.StrictMode>,
)
