import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/authProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner'

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner animation="grow" />;
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;

/*
    Tasks:
    -----------------------------------
    1. only allow authenticated user to visit the route
    2. 
    3. redirect user to the route if they wanted to go before login 
*/ 