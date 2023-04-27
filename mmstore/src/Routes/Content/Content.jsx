import React from 'react'
import { Outlet } from 'react-router-dom'
import Header_Menu from '../../Components/Header_Menu/Header_Menu'
import Footer from '../../Components/Footer/Footer'
const Content = () => {
    return (

        <>
            <Header_Menu />
            <Outlet />
            <Footer />
        </>
    )
}

export default Content