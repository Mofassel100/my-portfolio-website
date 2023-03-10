import { createBrowserRouter } from "react-router-dom";
import Aboute from "../AllComponet/Aboute/Aboute";
import Blogs from "../AllComponet/Blogs/Blogs";
import ResumeDown from "../AllComponet/DoawnloadResume/ResumeDown";
import ErrorPage from "../AllComponet/ErrorPage/ErrorPage";
import Home from "../AllComponet/Home/Home";
import Main from "../AllComponet/Main/Main";
import MyProject from "../AllComponet/MyProject/MyProject";

  export const router = createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/about",
                element:<Aboute></Aboute>
            },
            {
                path: "/blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"/resume",
                element:<ResumeDown></ResumeDown>
            },
            {
                path:"/myproject",
                element:<MyProject></MyProject>
            }
        ],
    }
  ])