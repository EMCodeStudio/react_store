import React from 'react'
import './Home.scss'
import ServicesHome from '../../Components/Services_Home/Services_Home'
import ProductsHome from '../../Components/Products_Home/Products_Home'
import SearchView from '../../Components/Search_View/Search_View'


const Home = () => {
  return (
    <div className="containerHome">
     <ServicesHome/>
     <SearchView/>
     <ProductsHome/>
    </div>
  )
}

export default Home