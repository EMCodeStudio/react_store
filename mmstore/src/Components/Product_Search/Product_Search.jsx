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

    const filteredProduct = dataProducts.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>

<ul>

  {  filteredProduct.map(products =>(
  <li key={products.id}>
    {products.title}
  </li>
  ))

  }

</ul>
        </>
    )
}

export default ProductSearch