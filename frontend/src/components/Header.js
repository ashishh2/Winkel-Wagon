import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {
    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar bg='info' variant='info' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>WINKEL WAGON</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle
                        aria-controls='basic-navbar-nav'
                        className='text-primary'
                    >
                        MENU
                    </Navbar.Toggle>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart' /> CART
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown
                                    title={userInfo.name}
                                    id='username'
                                >
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>
                                            PROFILE
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        LOGOUT
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fas fa-user' /> SIGN IN
                                    </Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Admin' id='adminmenu'>
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>
                                            USERS
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>
                                            PRODUCTS
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>
                                            ORDERS
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
