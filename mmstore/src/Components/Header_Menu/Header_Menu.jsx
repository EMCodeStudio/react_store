
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { ButtonSearch } from '../Styled/Buttons/Buttons'
import { InputSearch } from '../Styled/Inputs/Inputs'
import './Header_Menu.scss'
import SearchIcon from '@mui/icons-material/Search'
import { Link, useNavigate } from 'react-router-dom'
import { servicesCategories } from '../../Axios_Services/Services_Categories/Services_Categories'
import { useEffect, useState } from 'react'
import { servicesProducts } from '../../Axios_Services/Services_Products/Services_Products'
import { UlSearch } from '../Styled/List/List'

function Header_Menu() {

    const [categories, setCategories] = useState([])
    const navigateCategory = useNavigate()
    const navigateProducts = useNavigate()
    const [searchTerm, setSearchTerm] = useState("")
    const [productTitles, setProductTitles] = useState([])
    /* ------------------------------------------------------------- */
    const handleClickCategory = (categoryName) => {
        navigateCategory(`/category/${categoryName}`)
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault()
        navigateProducts(`/products-search/${searchTerm}`)
    }

    const fetchCategories = async () => {
        const result = await servicesCategories()
        setCategories(result.data)
    }
    /* ------------------------------------------------------------- */
    const onChange = (event) => {
        setSearchTerm(event.target.value)
    }
    const onSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
    }
    const fetchProductTitles = async () => {
        const result = await servicesProducts()
        setProductTitles(result.data)
    }
    /* ------------------------------------------------------------- */
    useEffect(() => {
        fetchCategories()
        fetchProductTitles()
    }, [])
    /* ------------------------------------------------------------- */
    return (
        <>
            <div className="headerMenu">
                <Navbar className='navbarMenu' expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">EMStore</Navbar.Brand>
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
                                <Nav className="justify-content-end flex-grow-1 "  >
                                    <Nav className='linkMenu mb-1'>
                                        <Link to={'/'}>INICIO</Link>
                                    </Nav>
                                    <Nav href="#action2 " className='linkMenu mb-1'>
                                        <Link to={'/offers'}>OFERTAS</Link>
                                    </Nav>
                                    <NavDropdown className=' linkMenu mb-1' title="CATEGORIAS" id={`offcanvasNavbarDropdown-expand-lg`}>
                                        {
                                            categories.map((categoryName, index) => {
                                                return (
                                                    <NavDropdown.Item key={index}
                                                        onClick={() =>
                                                            handleClickCategory(categoryName)} >
                                                        {categoryName}
                                                    </NavDropdown.Item>
                                                )
                                            })
                                        }
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex mt-1" onSubmit={handleSubmitSearch}>
                                    <InputSearch
                                        type='search'
                                        value={searchTerm}
                                        onChange={onChange} />
                                    <ButtonSearch type='submit' onClick={() => onSearch(searchTerm)} primaryColor>
                                        <SearchIcon />
                                    </ButtonSearch>
                                </Form>
                                <UlSearch>
                                    {productTitles
                                        .filter((product) => {
                                            const searchTermLowerCase = searchTerm.toLowerCase()
                                            const productTitleLowerCase = product.title.toLowerCase()
                                            return (
                                                searchTermLowerCase &&
                                                productTitleLowerCase.startsWith(searchTermLowerCase) &&
                                                productTitleLowerCase !== searchTermLowerCase
                                            )
                                        })
                                        .slice(0, 10)
                                        .map(renderProductTitle)}
                                </UlSearch>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </>
    )
    function renderProductTitle(product) {
        return (
            <li
                onClick={() => onSearch(product.title)}
                key={product.id}
            >
                {product.title}
            </li>
        )
    }
}

export default Header_Menu