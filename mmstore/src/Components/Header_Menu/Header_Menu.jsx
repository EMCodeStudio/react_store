/* import Button from 'react-bootstrap/Button'; */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ButtonSearch } from '../Styled/Buttons/Buttons';
import { InputSearch } from '../Styled/Inputs/Inputs';
import './Header_Menu.scss'
import SearchIcon from '@mui/icons-material/Search';
function Header_Menu() {
    return (
        <>
        <div className="headerMenu">
            <Navbar className='navbarMenu' expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">MMStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end">
                        <Offcanvas.Header closeButton >
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3"  >
                                <Nav.Link href="#action1" className='linkMenu'>
                                    INICIO
                                </Nav.Link>
                                <Nav.Link href="#action2" className='linkMenu'>
                                    OFERTAS
                                </Nav.Link>
                                <NavDropdown className='mb-2 linkMenu' title="CATEGORIAS" id={`offcanvasNavbarDropdown-expand-lg`}>
                                    <NavDropdown.Item href="#action3">
                                        Ropa
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action3">
                                        Calzado
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Tecnologia
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Accesorios
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action5">
                                        Cuidado Personal
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <InputSearch />
                                <ButtonSearch primaryColor><SearchIcon /></ButtonSearch>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
        </>
    );
}
export default Header_Menu;