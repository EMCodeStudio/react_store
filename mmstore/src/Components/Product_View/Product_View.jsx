
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


const ProductView = () => {

    const { id } = useParams()
    const [data, setData] = useState(null)

    const fetchData = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setData(response.data)
      }

    useEffect(() => {
      fetchData()
    }, [id])
  
    if (!data) {
      return <div>Cargando...</div>
    }
  
    return (
        <div>
            <h1>
                PRODUCTO
            </h1>
            <div>
                <h2>{data.tittle}</h2>
                <img src={data.image} alt=""  />
                <p>{data.price}</p>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default ProductView