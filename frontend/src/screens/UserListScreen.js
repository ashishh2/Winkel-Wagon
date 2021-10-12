import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers } from '../actions/userActions';

const UserListScreen = ({ history }) => {
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.userList);
    const { loading, users, error } = userList;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers());
        } else {
            history.push('/');
        }
    }, [dispatch, history, userInfo]);

    return (
        <>
            <h2>Users</h2>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>NAME</td>
                            <td>EMAIL</td>
                            <td>ADMIN</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.isAdmin ? (
                                        <i
                                            className='fas fa-check'
                                            style={{ color: 'green' }}
                                        ></i>
                                    ) : (
                                        <i
                                            className='fas fa-times'
                                            style={{ color: 'red' }}
                                        ></i>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    );
};

export default UserListScreen;
