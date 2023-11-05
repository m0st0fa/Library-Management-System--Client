import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Components/Home';
import ErrorElement from './Components/ErrorElement';
import AddBooks from './Components/AddBooks';
import Books from './Components/CategoryBook/Books';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
          path: '/addBooks',
          element:<AddBooks></AddBooks>
      },
      {
        path: '/Books/:Category',
        element: <Books></Books>,
        loader: ({params}) => fetch(`http://localhost:5001/books/${params.Category}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
