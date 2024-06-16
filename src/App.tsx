import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
    About,
    Cart,
    Checkout,
    Error,
    HomeLayout,
    Landing,
    Login,
    Orders,
    Products,
    Register,
    SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as ProductsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

import { action as registerUserAction } from "./pages/Register"
import { action as loginUserAction } from "./pages/Login"
import { action as checkoutAction } from './components/CheckoutForm'
import { store } from './store'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Landing />,
                errorElement: <ErrorElement />,
                loader: landingLoader
            },
            {
                path: 'products',
                element: <Products />,
                errorElement: <ErrorElement />,
                loader: ProductsLoader
            }, 
            {
                path: 'products/:id',
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singleProductLoader
            },
            {
                path: 'cart',
                element: <Cart />,
                errorElement: <ErrorElement />,
            },
            {
                path: 'about',
                element: <About />,
                errorElement: <ErrorElement />,
            },
            {
                path: 'checkout',
                element: <Checkout />,
                errorElement: <ErrorElement />,
                loader: checkoutLoader(store),
                action: checkoutAction(store)
            },
            {
                path: 'orders',
                element: <Orders />,
                errorElement: <ErrorElement />,
                loader: ordersLoader(store)
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
        action: loginUserAction(store)
    },
    {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
        action: registerUserAction
    }
]);

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
            
        </>
    );
};
export default App;
