import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { IconService } from '../Styled/Services/Styled_Services';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BoltIcon from '@mui/icons-material/Bolt';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import StoreIcon from '@mui/icons-material/Store';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Services() {

    const icon1 = (props) => (

        <Tooltip id="icon1" {...props}>
            Pedidos por Whatsapp
        </Tooltip>


    )
    const icon2 = (props) => (

        <Tooltip id="icon2" {...props}>
            Entregas Rapidas
        </Tooltip>

    )
    const icon3 = (props) => (

        <Tooltip id="icon3" {...props}>
            Ofertas Toda la semana
        </Tooltip>

    )
    const icon4 = (props) => (

        <Tooltip id="icon4" {...props}>
           Ventas al por Mayor
        </Tooltip>

    )

    return (
        <Container className='mt-5 mb-5'>
            <Row className="justify-content-md-center">


                <Col xs={{ offset: 1 }} className='mb-2 ml-2'>
                    <OverlayTrigger
                        id="icon1"
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={icon1}
                    >
                        <IconService>
                            <WhatsAppIcon className='icon' />
                        </ IconService >
                    </OverlayTrigger>
                    <div >
                        <p><b>Pedidos</b></p>
                    </div>
                </Col>


                <Col xs={{ offset: 1 }}  >
                    <OverlayTrigger
                        id="icon2"
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={icon2}
                    >
                        <IconService>
                            <BoltIcon className='icon' />
                        </ IconService >
                    </OverlayTrigger>
                    <div >
                        <p><b>Envios</b></p>
                    </div>
                </Col>



                <Col xs={{ offset: 1 }} >
                <OverlayTrigger
                        id="icon3"
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={icon3}
                    >
                    <IconService>
                        <LoyaltyIcon className='icon' />
                    </ IconService >
                    </OverlayTrigger>
                    <div >
                        <p><b>Ofertas</b></p>
                    </div>
                </Col>


                <Col xs={{ offset: 1 }} >
                <OverlayTrigger
                        id="icon4"
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={icon4}
                    >
                    <IconService>
                        <StoreIcon className='icon' />
                    </ IconService >
                    </OverlayTrigger>
                    <div >
                        <p><b>Catalogos</b></p>
                    </div>
                </Col>
            </Row>

        </Container>
    )

}

export default Services;