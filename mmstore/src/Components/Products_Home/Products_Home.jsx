
import React, { useEffect, useState } from 'react'
import Card_Product from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Products_Store.scss'
import { TitleProduct } from '../Styled/Titles/Titles'
import { ServicesProducts } from '../../Axios_Services/Services_Products/Services_Products'

const ProductsHome = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(3)

  const fetchProducts = async () => {
    const result = await ServicesProducts()
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
                  <Card_Product key={dataProducts.id} dataP={dataProducts} index={i} />
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