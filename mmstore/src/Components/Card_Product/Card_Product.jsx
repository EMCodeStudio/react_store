
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { ButtonProduct } from '../Styled/Buttons/Buttons'
import './Card_Product.scss'
import { useEffect, useState } from 'react'
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000))
}
function Card_Product({ dataP }) {
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false)
            })
        }
    }, [isLoading])
    const handleClick = () => setLoading(true)
    return (
        <>
            <Col xs='12' sm='8' md='6' lg='4' xl='3' className='mb-5 center'>
                <Card border="light" className='cardProduct'>
                    
                    <Card.Img title='Image' style={{ minHeight: '180px' }} variant="top" src={dataP.image} />
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">$ {dataP.price}</Card.Subtitle>
                        <Card.Title  >{dataP.title}</Card.Title>
                        <ButtonProduct
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : null}>
                            <p>
                                {isLoading ? 'Cargan...' : 'Comprar'}
                            </p>
                            <AddShoppingCartIcon className='icon' />
                        </ButtonProduct>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}
export default Card_Product