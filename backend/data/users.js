import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Alyson',
        email: 'alyson@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Gia',
        email: 'Gia@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;
