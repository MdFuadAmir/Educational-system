import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AllCourse from "../Pages/AllCourse/AllCourse";
import About from "../Pages/About/About";
import Pricing from "../Pages/Pricing/Pricing";
import Contact from "../Pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/allCourses",
                element: <AllCourse/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/pricing",
                element: <Pricing/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }

])

export default router;