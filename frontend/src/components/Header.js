import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg='info' variant='info' expand='lg' collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>WINKEL WAGON</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <Nav.Link href='/cart'>
                                <i className='fas fa-shopping-cart' /> CART
                            </Nav.Link>
                            <Nav.Link href='/login'>
                                <i className='fas fa-user' /> LOGIN
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
