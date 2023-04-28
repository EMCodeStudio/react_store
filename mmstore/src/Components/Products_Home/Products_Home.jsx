
import React, { useEffect, useState } from 'react'
import CardProduct from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Products_Store.scss'
import { TitleProduct } from '../Styled/Titles/Titles'
import { servicesProducts } from '../../Axios_Services/Services_Products/Services_Products'

const ProductsHome = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(3)

  const fetchProducts = async () => {
    const result = await servicesProducts()
    setProducts(result.data)
    setLoading(false)
  }
  
  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <Container>
      <TitleProduct>
        <h2 >Produtos Recientes</h2>
      </TitleProduct>
      {loading ? (
        <p>Cargando Productos...</p>
      ) : (
        <Row >
          {
            products.map((dataProducts, i) => {
              return (
                i <= count ?
                  <CardProduct key={dataProducts.id} dataP={dataProducts} index={i} />
                  :
                  ''
              )
            })
          }
        </Row>
      )}
    </Container>
  )
}

export default ProductsHome