
import React, { useEffect, useState } from 'react';
/* import { Link } from 'react-router-dom'; */

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconColombia from '../../assets/Icons/Icon-colombia.png';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchOffIcon from '@mui/icons-material/SearchOff';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Header.scss';


const Header = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [searchButton, setSearchButton] = useState(false)
    const [toggleButton, setToggleButton] = useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);


    const handleCategory = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    function handleToggle() {
        if (!toggleButton) {
            setToggleButton(true)
        } else {
            setToggleButton(false)
        }
    }
    function handleSearch() {
        if (!searchButton) {
            setSearchButton(true)
        } else {
            setSearchButton(false)
        }
    }
    function handleCart() {
    }

    /*const [height, setHeight] = useState(0);*/
    const [, setHeight] = useState(0);
    useEffect(() => {
        const listenToScroll = () => {
            let heightToHideFrom = 0;
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            setHeight(winScroll);
            if (winScroll > heightToHideFrom) {
                isVisible && setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        }
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    }, [isVisible]);

    return (
        <>
            {!searchButton &&
                <div className="socialContain">
                    <div className={isVisible ? 'social whiteSocial' : 'social'} >
                        <FacebookRoundedIcon className='red-1' />
                        <TwitterIcon className='red-2' />
                        <InstagramIcon className='red-3' />
                    </div>
                </div>
            }
            {searchButton &&
                <div className="searhContain">
                    <div className='blurSearch'></div>
                    <div className="search">
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <IconButton sx={{ p: '10px' }}
                                aria-label="menu"
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleCategory} >
                                <MenuIcon />
                            </IconButton>
                            <Menu style={{ marginTop: '9px' }}
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Ropa</MenuItem>
                                <MenuItem onClick={handleClose}>Calzado</MenuItem>
                                <MenuItem onClick={handleClose}>Tecnologia</MenuItem>
                                <MenuItem onClick={handleClose}>Belleza</MenuItem>
                            </Menu>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Busqueda aqui ..."
                                inputProps={{ 'aria-label': 'Publicacion' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <IconButton onClick={() => handleSearch()} color="primary" sx={{ p: '10px' }} aria-label="directions" >
                                <CloseIcon />
                            </IconButton>
                            <IconButton onClick={() => handleSearch()} color="primary" sx={{ p: '10px' }} aria-label="directions" >
                                <SearchOffIcon />
                            </IconButton>
                        </Paper>
                    </div>
                </div>
            }
            {!searchButton &&
                <div className="containerNav">
                    <Navbar className={isVisible ? "noBack" : " "} expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">EMStore</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" onClick={() => handleToggle()} />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                                    <Nav className='item cat-pub'>
                                        <Link className='link' to="/Publicaciones/1">Ropa</Link>
                                    </Nav>
                                    <Nav className='item cat-pub'>
                                        <Link className='link' to="/Publicaciones/2">Calzado</Link>
                                    </Nav>
                                    <Nav className='item cat-pub'>
                                        <Link className='link' to="/Publicaciones/3">Tecnologia</Link>
                                    </Nav>
                                    <Nav className='item cat-pub'>
                                        <Link className='link' to="/Publicaciones/3">Belleza</Link>
                                    </Nav>

                                    {/*  <NavDropdown title="Link" id="navbarScrollingDropdown">
                                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                      <NavDropdown.Item href="#action4">
                                        Another action
                                      </NavDropdown.Item>
                                      <NavDropdown.Divider />
                                      <NavDropdown.Item href="#action5">
                                        Something else here
                                      </NavDropdown.Item>
                                    </NavDropdown> */}
                                    {/*   
                                        <Nav.Link href="#" disabled>Link</Nav.Link> 
                                    */}

                                </Nav>
                                <Form className="d-flex right ">
                                    <div className='item flag-col'>
                                        <img src={IconColombia} alt="" />
                                        <ArrowDropDownIcon />
                                    </div>
                                    <div className="item opc-men">
                                        <Link className='link' to="/">Inicio</Link>
                                    </div>
                                    <div className="item opc-men">
                                        <Link className='link' to="/">Ofertas</Link>
                                    </div>
                                    <div className='icons mx-auto'>
                                        <SearchIcon onClick={() => handleSearch()} className='icon-1' />
                                        <AccountCircleOutlinedIcon className='icon-2' />
                                        <FavoriteBorderIcon className='icon-3' />
                                        <LocalShippingOutlinedIcon className='icon-4' />
                                        <div className="cartIcon" onClick={(e) => handleCart()}>
                                            <ShoppingCartOutlinedIcon className='icon-5' />
                                            <span>2</span>
                                        </div>
                                    </div>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    {/*   {cartState && <Cart />} */}
                </div >
            }
        </>
    )
}

export default Header