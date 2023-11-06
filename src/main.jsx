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
import SingleBookDetails from './Components/SingleBookDetails/SingleBookDetails';
import GetAllBooks from './Components/AllBooks/GetAllBooks';
import Login from './Components/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import Register from './Components/Login/Register';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
          path: '/register',
          element:<Register></Register>
      },
      {
        path: '/addBooks',
        element: <AddBooks></AddBooks>
      },
      {
        path: '/allBooks',
        element: <GetAllBooks></GetAllBooks>,
        loader: () => fetch('http://localhost:5001/books')


      },
      {
        path: '/Books/:Category',
        element: <Books></Books>,
        loader: ({ params }) => fetch(`http://localhost:5001/books/${params.Category}`)
      },
      {
        path: '/details/:id',
        element: <SingleBookDetails></SingleBookDetails>,
        loader: ({ params }) => fetch(`http://localhost:5001/details/${params.id}`)

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
          <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
