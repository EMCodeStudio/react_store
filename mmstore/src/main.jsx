import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import SSRProvider from 'react-bootstrap/SSRProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <SSRProvider>
   
      <App />
    
  </SSRProvider>
)
