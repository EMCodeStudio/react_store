import React from 'react'
import Banner from '../../Components/Banner/Banner'
import ProductStore from '../../Components/Products_Store/Products_Store'
import ServicesHome from '../../Components/Services_Home/Services_Home'
import './Home.scss'
const Home = () => {
  return (
     <div className="containerHome">
        <Banner/>
        <ServicesHome />
        <ProductStore/>
     </div>
  )
}

export default Home