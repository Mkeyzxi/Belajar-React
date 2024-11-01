import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Component/Pages/Login.jsx';
import Register from './Component/Pages/Register.jsx';
import Error from './Component/Pages/Error.jsx';
import Products from './Component/Pages/Product.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    errorElement: <Error />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/products',
    element: <Products />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
