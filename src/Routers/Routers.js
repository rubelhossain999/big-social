import { createBrowserRouter } from "react-router-dom";
import SinglePost from "../Allposts/SinglePost";
import Login from "../Auth/Login/Login";
import Registration from "../Auth/Registration/Registration";
import About from "../Components/About/About";
import AddPost from "../Components/AddPost/AddPost";
import AllPost from "../Components/AllPost/AllPost";
import Favorite from "../Components/Favorite/Favorite";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/favorite-post',
                element: <Favorite />

            },
            {
                path: '/all-post',
                element: <AllPost />
            },
            {
                path: '/add-post',
                element: <AddPost />
            },
            {
                path: '/single-post',
                element: <SinglePost />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
            {
                path: '*',
                element: "404"
            }
        ]
    }
]);

export default router;
