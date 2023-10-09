import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Classes from './Components/Home/Classes';
import Teachers from './Components/Home/Teachers';
import Blog from './Components/Home/Blog';
import Contact from './Components/Home/Contact';
import EventsDetails from './Components/EventsCard/EventsDetails';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/event/:id",
        element: <EventsDetails></EventsDetails>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/mentors',
        element: <Teachers></Teachers>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    {
      path: '/register',
      element: <Register></Register>
    }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
