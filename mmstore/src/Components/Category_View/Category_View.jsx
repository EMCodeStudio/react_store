import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
  return (


    <div style={{ paddingTop: '150px', paddingBottom: '100px' }}>
      {
        data.map((result) => {

          return (

            <div className="view" key={result.id}>
              <h2>{result.tittle}</h2>
            </div>

          )
        })
      }

    </div>
  )
}

export default CategoryView