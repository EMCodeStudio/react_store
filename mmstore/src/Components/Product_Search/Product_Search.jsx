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

            {dataProducts
                .filter((product) => {
                    const searchTermLowerCase = searchTerm.toLowerCase()
                    const productTitleLowerCase = product.title.toLowerCase()
                    return (
                        searchTermLowerCase &&
                        productTitleLowerCase.startsWith(searchTermLowerCase) &&
                        productTitleLowerCase !== searchTermLowerCase
                    )
                })
                .slice(0, 10)
                .map(renderProducts)}


        </>
    )

    function renderProducts(product) {
        return (
            <li
                onClick={() => onSearch(product.title)}
                key={product.id}
            >
                {product.title}
            </li>
        )
    }
}

export default ProductSearch