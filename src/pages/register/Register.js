import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../context/authProvider/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false); // terms and condition
    const { error, setError } = useState(''); // error setting

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError(''); // error cleaning
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please, verify your email address')
            })
            .catch(error => {
                console.log(error);
                setError(error.message); // error message showing
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control type="text" name="photo" placeholder="Photo Url" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onclick={handleAccepted} label={<>Accept <Link to='/terms'>Terms And Conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;