import { createBrowserRouter } from "react-router-dom";
import SinglePost from "../Allposts/SinglePost";
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
            }
        ]
    }
]);

export default router;
