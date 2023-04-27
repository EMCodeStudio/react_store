import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import SSRProvider from 'react-bootstrap/SSRProvider';
import { axiosProducts } from './Axios_Interceptors/Axios_Products/Axios_Products';

axiosProducts()

ReactDOM.createRoot(document.getElementById('root')).render(
  <SSRProvider>
      <App />
  </SSRProvider>
)
