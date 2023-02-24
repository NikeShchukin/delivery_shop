import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';
import ErrorPage from '../pages/ErrorPage';
import ProductDetails from '../pages/ProductDetails';
import Layout from '../pages/Layout';
import { routes } from './Routes';
import { fetchProductByIdRouted } from './fetchProductById';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        element: <Home/>,
        index: true
      },
      {
        element: <Shop/>,
        path: routes.shop
      },
      {
        element: <Cart/>,
        path: routes.cart
      },
      {
        element: <ProductDetails/>,
        path: routes.productDetails(),
        loader: fetchProductByIdRouted
      },
    ]
  },
  
]);

export const App = () => <RouterProvider router={router}></RouterProvider>