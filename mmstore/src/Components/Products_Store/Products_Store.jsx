
import React, { useEffect, useState } from 'react'
import Card_Product from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Products_Store.scss'
import { TitleProduct } from '../Styled/Titles/Titles'
import axios from 'axios'

const ProductStore = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const result = await axios(
      'https://fakestoreapi.com/products'
    );
    setProducts(result.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <TitleProduct>
        <h2 >Produtos Recientes</h2>
      </TitleProduct>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Row >
          {
            products.map((productData, i) => {
              console.log('id:', productData.id)
              return (
                <Card_Product key={productData.id} dataP={productData} index={i} />
              )
            })
          }
        </Row>
      )}
    </Container>
  )
}

export default ProductStore