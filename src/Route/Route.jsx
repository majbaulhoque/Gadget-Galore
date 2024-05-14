import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorite from "../Pages/Favorite/Favorite";
import LogIn from "../Pages/Log In/LogIn";
import ErrorElement from "../Pages/Error Element/ErrorElement";
import Phone from "../Pages/Phone/Phone";




const Route = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/phones.json'),
            },
            {
                path: "/favorite",
                element: <Favorite></Favorite>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
            {
                path : "/phones/:id",
                element : <Phone></Phone>,
                loader:()=>fetch('/phones.json')
            }
        ],
    },
])
    

export default Route;