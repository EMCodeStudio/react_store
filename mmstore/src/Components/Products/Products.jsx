import React from 'react'
import Card_Product from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { dataProducts } from './Data_Products'
import './Products.scss'
import { TitleProduct } from '../Styled/Titles/Titles'

const Products = () => {
  return (
      <Container>

        <TitleProduct>
          <h2 >Produtos Recientes</h2>
        </TitleProduct>
        <Row >
          {
            dataProducts.map((dataP) => (
              <Card_Product  key={dataP.id}   data={dataP}/>
            ))
          }
        </Row>
      </Container>
  )
}

export default Products