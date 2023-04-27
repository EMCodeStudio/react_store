import React from 'react'
import './Home.scss'
import ServicesHome from '../../Components/Services_Home/Services_Home'
import ProductsHome from '../../Components/Products_Home/Products_Home'


const Home = () => {
  return (
    <div className="containerHome">
     <ServicesHome/>
     <ProductsHome/>
    </div>
  )
}

export default Home