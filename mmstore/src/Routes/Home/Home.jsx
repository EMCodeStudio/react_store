import React from 'react'
import './Home.scss'
import ServicesHome from '../../Components/Services_Home/Services_Home'
import ProductStore from '../../Components/Products_Store/Products_Store'


const Home = () => {
  return (
    <div className="containerHome">
     <ServicesHome/>
     <ProductStore/>
    </div>
  )
}

export default Home