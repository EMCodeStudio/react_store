/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ButtonProduct } from '../Styled/Buttons/Buttons';
import './Card_Product.scss'
import { useEffect, useState } from 'react';


function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

function Card_Product({ data }) {


    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);



    const handleClick = () => setLoading(true);
    return (
        <Col xs='12' sm='8' md='6' lg='4' xl='3' className='mb-5 center'>

            <Card border="light" className='cardProduct'>
                <Card.Img title='Image' style={{ minHeight: '180px' }} variant="top" src={data.image} />
                <Card.Body>
                    <Card.Title className="text-gray" >{data.title}</Card.Title>
                    <ButtonProduct
                        disabled={isLoading}
                        onClick={!isLoading ? handleClick : null}
                    >
                        {isLoading ? 'Cargan...' : 'Comprar'}
                        <AddShoppingCartIcon className='icon' />
                    </ButtonProduct>
                </Card.Body>

            </Card>
        </Col>
    );
}

export default Card_Product;