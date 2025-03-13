import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import CountryDetail from "./components/CountryDetail.jsx";
import Error from "./components/Error.jsx";
const router = createBrowserRouter([
    {
     path:'/',
     element:<App/>,
     errorElement:<Error/>,
     children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/:country',
            element:<CountryDetail/>
        }
     ]

    },
])
const root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router}/>)