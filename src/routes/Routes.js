import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../pages/category/Category";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import News from "../pages/news/News";
import Profile from "../pages/others/Profile";
import TermsAndCondition from "../pages/others/TermsAndCondition";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
]);