import React, { useState, useEffect } from "react"
import './style.scss'
import { servicesCategories } from "../../Axios_Services/Services_Categories/Services_Categories"
import { servicesProducts } from "../../Axios_Services/Services_Products/Services_Products"
import CardSearch from "../Card_Search/Card_Search"

function SearchView() {

  const [categoryNames, setCategoryNames] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const fetchCategoryNames = async () => {
    const resultCategory = await servicesCategories()
    const categoryNames = resultCategory.data
    const initialCheckBoxValues = {}
    categoryNames.forEach((category) => {
      initialCheckBoxValues[category] = false
    })
    setCategoryNames(categoryNames)
    setCheckBoxValues(initialCheckBoxValues)
  }

  const fetchProducts = async () => {
    const resultProducts = await servicesProducts()
    setProducts(resultProducts.data)
  }

  useEffect(() => {
    fetchCategoryNames()
    fetchProducts()
  }, [])

  const initialCheckBoxValues = {}
  categoryNames.forEach((category) => {
    initialCheckBoxValues[category] = false
  })

  const [checkBoxValues, setCheckBoxValues] = useState(initialCheckBoxValues)

  const handleOnCheckBox = (event) => {
    setCheckBoxValues({
      ...checkBoxValues,
      [event.target.value]: event.target.checked
    })
  }

  useEffect(() => {
    const selectedCategories = Object.entries(checkBoxValues)
      .filter(([categoryName, checked]) => checked)
      .map(([categoryName, checked]) => categoryName)
    const filteredProducts = products.filter(product => {
      return selectedCategories.includes(product.category)
    })
    setFilteredProducts(filteredProducts)
  }, [checkBoxValues, products])

  console.log('ESTADOS CHECK: ' + filteredProducts.length)

  return (
    <div className="search-container">

      <h1>Filtros</h1>
      
      {categoryNames.map((dataCategoryNames, index) => {
        return (
          <div className="checks" key={index}>
            <input
              onChange={handleOnCheckBox}
              type="checkbox"
              name={dataCategoryNames}
              value={dataCategoryNames}
              id={dataCategoryNames}
              checked={checkBoxValues[dataCategoryNames]}
            />
            <label htmlFor={dataCategoryNames}>{dataCategoryNames}</label>
          </div>
        )
      })}

    {/*  {
      filteredProducts.length > 0 ? 
     
     'si'
      :
      <>
      <h1>Productos con Campo Busqueda</h1> */}
      {filteredProducts.map((product, index) => {
        return(
          <CardSearch key={index} dataSearch={product}/>
        )
      })}
    {/*   </>
     }
       */}
       
  

    </div>
  )
}

export default SearchView
