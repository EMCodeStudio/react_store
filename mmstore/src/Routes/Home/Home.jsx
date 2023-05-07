import React from 'react'
import './Home.scss'
import ServicesHome from '../../Components/Services_Home/Services_Home'
/* import ProductsHome from '../../Components/Products_Home/Products_Home'
import PageSearch from '../Page_Search/Page_Search' */


const Home = () => {
  return (
    <div className="containerHome">
      <ServicesHome />
  {/*     <PageSearch /> */}
 {/*       <ProductsHome />  */}
    </div>
  )
}

export default Home