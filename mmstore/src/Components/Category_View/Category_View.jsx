import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CardProduct from '../Card_Product/Card_Product'

const CategoryView = () => {

  const { categoryName } = useParams()
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`)
    setData(response.data)
  }
  useEffect(() => {
    fetchData()
  }, [categoryName])

  console.log('RESULT CATEGORY: ' + data)

  return (
    <>
        {
        data.map((result) => {
          return (
            <CardProduct key={result.id} dataP={result}/>
          )
        })
      }
    </>
  )
}

export default CategoryView