/* import Button from 'react-bootstrap/Button'; */
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'

import { ButtonProduct } from '../Styled/Buttons/Buttons';

function Card_Product({data}) {
    return (
        <>
            <Col xs='12' sm='8' md='6' lg='4' xl='3' key={data.id} className='mb-5 center'>
                <Card style={{ minHeight: '300px' }}>

                    <Card.Img title='Image' style={{ minHeight: '180px' }} variant="top" src={data.image} />
                    <Card.Body>
                        <Card.Title >{data.title}</Card.Title>
                        <ButtonProduct>Comprar</ButtonProduct>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Card_Product;