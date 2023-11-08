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
import SingleBorrowedBookInfo from './Components/SingleBookDetails/SingleBorrowedBookInfo';
import AllBooksUpdate from './Components/AllBooks/AllBooksUpdate';
import PrivateRoutes from './Components/PriviteRoutes/PrivateRoutes';
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
        element: <Register></Register>
      },
      {
        path: '/addBooks',
        element: <PrivateRoutes>
          <AddBooks></AddBooks>
        </PrivateRoutes>
      },
      {
        path: '/allBooks',
        element: <PrivateRoutes><GetAllBooks></GetAllBooks>,</PrivateRoutes>,
        loader: () => fetch('http://localhost:5001/books')
      },
      {
        path: '/update/:id',
        element: <PrivateRoutes><AllBooksUpdate></AllBooksUpdate></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5001/update/${params.id}`)

      },
      {
        path: '/Books/:Category',
        element:<PrivateRoutes> <Books></Books></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5001/books/${params.Category}`)
      },
      {
        path: '/details/:id',
        element:<PrivateRoutes> <SingleBookDetails></SingleBookDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5001/details/${params.id}`)

      }, {
        path: '/BorrowedBook',
        element: <PrivateRoutes><SingleBorrowedBookInfo></SingleBorrowedBookInfo>,</PrivateRoutes>,
        loader: () => fetch('http://localhost:5001/Borrowed')
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
