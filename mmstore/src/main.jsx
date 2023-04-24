import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Header_Menu from './Components/Header_Menu/Header_Menu'
import './index.scss'
import SSRProvider from 'react-bootstrap/SSRProvider';
import Footer from './Components/Footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <SSRProvider>
      <Header_Menu />
      <App />
      <Footer />
    </SSRProvider>
  </React.StrictMode>,
)
