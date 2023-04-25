import React, { useEffect, useState } from 'react'
import Card_Product from '../Card_Product/Card_Product'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Products_Store.scss'
import { TitleProduct } from '../Styled/Titles/Titles'
import { servicesProducts } from '../../Services_Axios/Products_Services/Services_Products'

const Products = () => {

  const [productsData, setProductsData] = useState([])

  const fetchData = async () => {
    const { dataProductsFetch } = await servicesProducts()
    setProductsData(dataProductsFetch)
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
          productsData.map((data) => (
            <Card_Product key={data.id} dataP={data} />
          ))
        }
      </Row>
    </Container>
  )
}

export default Products