import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IconService } from '../Styled/Services/Styled_Services';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BoltIcon from '@mui/icons-material/Bolt';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StoreIcon from '@mui/icons-material/Store';
function Services() {

    return (
        <Container className='mt-5 mb-5'>
            <Row >
                <Col xs={3}>
                    <IconService>
                        <WhatsAppIcon />
                    </ IconService >
                </Col>
                <Col xs={3}>
                    <IconService>
                        <BoltIcon />
                    </ IconService >
                </Col>
                <Col xs={3}>
                    <IconService>
                        <LoyaltyIcon />
                    </ IconService >
                </Col>
                <Col xs={3}>
                    <IconService>
                        <StoreIcon />
                    </ IconService >
                </Col>
            </Row>

        </Container>
    )

}

export default Services;