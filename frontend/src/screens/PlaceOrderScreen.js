import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';

const PlaceOrderScreen = ({ history }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2);

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
    );
    cart.shippingPrice = addDecimals(cart.itemsPrice > 500 ? 0 : 50);
    cart.taxPrice = addDecimals(Number((0.18 * cart.itemsPrice).toFixed(2)));
    cart.totalPrice = addDecimals(
        (
            Number(cart.itemsPrice) +
            Number(cart.shippingPrice) +
            Number(cart.taxPrice)
        ).toFixed(2)
    );

    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, success, error } = orderCreate;

    useEffect(() => {
        if (success) {
            history.push(`/orders/${order._id}`);
        }
        // eslint-disable-next-line
    }, [history, success]);

    const placeOrderHandler = () => {
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                itemsPrice: cart.itemsPrice,
                shippingPrice: cart.shippingPrice,
                taxPrice: cart.taxPrice,
                totalPrice: cart.totalPrice,
            })
        );
    };

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Shipping</h2>
                                <p>
                                    <strong>Address: </strong>
                                    {cart.shippingAddress.address},{' '}
                                    {cart.shippingAddress.city},{' '}
                                    {cart.shippingAddress.postalCode},{' '}
                                    {cart.shippingAddress.country}
                                </p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Payment Method</h2>
                                <p>
                                    <strong>Method: </strong>
                                    {cart.paymentMethod}
                                </p>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <h2>Order Items</h2>
                                {cart.cartItems.length === 0 ? (
                                    <Message>Your cart is empty</Message>
                                ) : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fluid
                                                            rounded
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link
                                                            style={{
                                                                textDecoration:
                                                                    'none',
                                                            }}
                                                            to={`/products/${item.product}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x ₹
                                                        {item.price} = ₹
                                                        {(
                                                            item.qty *
                                                            item.price
                                                        ).toFixed(2)}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                )}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>₹{cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>₹{cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>₹{cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>₹{cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && (
                                    <Message variant='danger'>{error}</Message>
                                )}
                            </ListGroup.Item>
                            <ListGroup.Item className='d-grid'>
                                <Button
                                    type='button'
                                    variant='success'
                                    disabled={cart.cartItems.length === 0}
                                    onClick={placeOrderHandler}
                                >
                                    PLACE ORDER
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default PlaceOrderScreen;
