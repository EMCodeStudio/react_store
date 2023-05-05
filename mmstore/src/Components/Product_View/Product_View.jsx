
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import './Product_View.scss'

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
    <>
      <div className="product-view">

        <div className="image-gallery">
          <img src="imagen1.jpg" alt="Imagen 1" />
          <img src="imagen2.jpg" alt="Imagen 2" />
          <img src="imagen3.jpg" alt="Imagen 3" />
        </div>
        
        <div className="main-image">
          <img src={data.image} alt="Imagen grande del producto" />
        </div>

        <div className="product-details">
          <h2>{data.title}</h2>
          <p>Precio: ${data.price}</p>
          <p>Descripción: {data.description}.</p>
        </div>

      </div>

    </>
  )
}

export default ProductView