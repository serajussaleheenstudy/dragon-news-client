import toast from 'react-hot-toast';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const { error, setError } = useState(''); // error setting
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError(''); // error cleaning

                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified');
                }
            })
            .catch(error => {
                console.log(error);
                setError(error.message); // error message showing
            })
        // .finally(() => {
        //     setLoading(false);
        // })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="name" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;