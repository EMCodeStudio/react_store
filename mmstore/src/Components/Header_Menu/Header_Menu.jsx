import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header_Menu.scss'
function Header_Menu() {


    return (
        <>


            <Navbar bg="light" expand="lg" className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#">MMStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-lg`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">
                                    Inicio
                                </Nav.Link>
                                <Nav.Link href="#action2">
                                    Ofertas
                                </Nav.Link>
                                <NavDropdown title="Categorias" id={`offcanvasNavbarDropdown-expand-lg`}>
                                    <NavDropdown.Item href="#action3">
                                        Calzado
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Tecnologia
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Fitness
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>

                            <Form className="d-flex">

                                <Form.Control 
                                    type="search"
                                    placeholder="Search"
                                    className="campoBusqueda"
                                    aria-label="Search"
                                />

                                <Button className="botonBusqueda" variant=" outline-success">Buscar</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </>
    );
}

export default Header_Menu;