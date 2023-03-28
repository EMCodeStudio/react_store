import React from 'react'
import Card_Product from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { dataProducts } from './Data_Products'
const Products = () => {
  return (
    <>
      <Container>
        <Row >
          {
            dataProducts.map((dataP) => (
              <Card_Product  data={dataP}/>
            ))
          }
        </Row>
      </Container>
    </>
  )
}

export default Products