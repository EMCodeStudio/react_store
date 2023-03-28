import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Products from '../../Components/Products/Products'
import Services from '../../Components/Services/Services'
import './Home.scss'
const Home = () => {
  return (
    <>
     
     <div className="containerHome">
        <Banner />
        <Services />
        <Products/>
     </div>
     
    </>
  )
}

export default Home