import React, { useState, useEffect } from "react"
import './style.scss'
import { servicesProducts } from "../../Axios_Services/Services_Products/Services_Products"

function SearchView() {

  const [searchTerm, setSearchTerm] = useState("")
  const [productTitles, setProductTitles] = useState([])

  const onChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm)
  }
  const fetchProductTitles = async () => {
    const result = await servicesProducts()
    setProductTitles(result.data)
  }

  useEffect(() => {
  
  }, [])

  return (


    <div className="search-container">
      <div className="search-input">
        <input
          type="search"
          placeholder="Buscar"
          value={searchTerm}
          onChange={onChange}
        />
        <button onClick={() => onSearch(searchTerm)}>Buscar</button>
        {productTitles
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
          .map(renderProductTitle)}
      </div>
    </div>
  )

  function renderProductTitle(product) {
    return (
      <div
        className="product-title"
        onClick={() => onSearch(product.title)}
        key={product.id}
      >
        {product.title}
      </div>
    )
  }
}

export default SearchView
