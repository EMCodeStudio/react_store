import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { servicesProducts } from '../../Axios_Services/Services_Products/Services_Products'

const ProductSearch = () => {

    const [searchTerm] = useParams()
    const [dataProducts, setDataProducts] = useState()

    const fetchData = async () => {
        const response = await servicesProducts()
        setDataProducts(response.data)

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

           <h1>{searchTerm}</h1>


        </>
    )
}

export default ProductSearch