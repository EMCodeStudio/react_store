import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { dataProducts } from '../Products/Data_Products';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Card_Product() {
    return (
        <>
            <Container>
                <Row >

                    {
                        dataProducts.map((data) => (
                            <Col  xs='12' sm='8' md='6' lg='4' xl='3' key={data.id} className='mb-5 center'>
                                <Card style={{ minHeight: '300px' }}>
                                    
                                    <Card.Img title='Image'style={{ minHeight: '180px' }}  variant="top" src={data.image} />
                                    <Card.Body>
                                        <Card.Title >{data.title}</Card.Title>
                                        <Button variant="primary">Comprar</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}

export default Card_Product;