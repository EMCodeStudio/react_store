import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Services from '../../Components/Services/Services'
import './Home.scss'
const Home = () => {
  return (
    <>
     
     <div className="containerHome">
        <Banner />
        <Services />
     </div>
     
    </>
  )
}

export default Home