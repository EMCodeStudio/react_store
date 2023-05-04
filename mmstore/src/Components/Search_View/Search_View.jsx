import React, { useState, useEffect } from "react"
import './style.scss'
import { servicesCategories } from "../../Axios_Services/Services_Categories/Services_Categories"
import { servicesProducts } from "../../Axios_Services/Services_Products/Services_Products"

function SearchView() {

  const [categoryNames, setCategoryNames] = useState([])
  const [checkBoxValues, setCheckBoxValues] = useState({})
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const handleOnCheckBox = (event) => {
    setCheckBoxValues({
      ...checkBoxValues,
      [event.target.value]: event.target.checked
    })

  }

  const fetchCategoryNames = async () => {
    const resultCategory = await servicesCategories()
    setCategoryNames(resultCategory.data)
  }

  const fetchProducts = async () => {
    const resultProducts = await servicesProducts()
    setProducts(resultProducts.data)
  }

  useEffect(() => {
    fetchProducts()
    fetchCategoryNames()
  }, [])


  useEffect(() => {
    const selectedCategories = Object.entries(checkBoxValues)
      .filter(([categoryName, checked]) => checked)
      .map(([categoryName, checked]) => categoryName)

    const filteredProducts = products.filter(product => {
      return selectedCategories.includes(product.category)
    })
    setFilteredProducts(filteredProducts)
  }, [checkBoxValues, products])

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

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchView
