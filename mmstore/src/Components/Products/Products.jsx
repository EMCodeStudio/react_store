import React, { useEffect, useState } from 'react'
import Card_Product from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
/* import { dataProducts } from './Data_Products' */
import './Products.scss'
import { TitleProduct } from '../Styled/Titles/Titles'
import { servicesProducts } from '../../Services/Products_Services/Services_Products'

const Products = () => {


  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const { data } = await servicesProducts()
    setProducts(data)
  }

  useEffect(()=>{

    try {
      fetchData()
    } catch (error) {
      console.log('ERROR FETCH DATA:' + error)
    }
  },[])

  return (
    <Container>

      <TitleProduct>
        <h2 >Produtos Recientes</h2>
      </TitleProduct>
      <Row >
        {
          products.map((dataP) => (
            <Card_Product key={dataP.id} data={dataP} />
          ))
        }
      </Row>
    </Container>
  )
}

export default Products