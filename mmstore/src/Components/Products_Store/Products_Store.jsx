
import React, { useEffect, useState } from 'react'
import Card_Product from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Products_Store.scss'
import { TitleProduct } from '../Styled/Titles/Titles'
import { servicesProduct } from '../../Services_Axios/Products_Services/Services_Products'



const ProductStore = () => {

  const [product, setProduct] = useState([])

  const fetchData = async () => {
    const { data } = await servicesProduct()
    setProduct(data)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log('ERROR FETCH DATA:' + error)
    }
  }, [])

  console.log('DATA PRODUCTS: ' + product.id)

  return (
    <Container>
      <TitleProduct>
        <h2 >Produtos Recientes</h2>
      </TitleProduct>
      <Row >
        {
          product.map((d, i) => {

            
            return(
              <Card_Product dataP={d} key={d.id} />
            )
           
          })
        }
      </Row>
    </Container>
  )
}

export default ProductStore