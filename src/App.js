import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './Layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { ProductsCartLoader } from './Loaders/ProductsCartLoader';
import Login from './components/Login/Login';
import SingUp from './components/SingUp/SingUp';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './route/PrivateRoute';


function App() { 
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: () => {
          //   return fetch('http://localhost:5000/products')
          // },
          element:<Shop></Shop>
        },
        {
          path: '/orders',
          loader: ProductsCartLoader,
          element:<Orders></Orders>
        },
        {
          path: '/inventory',
          element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
    {
      path: 'about',
      element:<About></About>
    },
    {
      path: 'login',
      element:<Login></Login>
    },
    {
      path: 'singup',
      element:<SingUp></SingUp>
    }
    ,
    {
      path: 'shipping',
      element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
    }
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
