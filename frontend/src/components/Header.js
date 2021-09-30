import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg='info' variant='info' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>WINKEL WAGON</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart' /> CART
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <i className='fas fa-user' /> SIGN IN
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
