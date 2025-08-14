import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Root from './pages/Root';
import Error from './pages/Error';
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {index: true, element: <Home/>}, // path:'' or index route
            {path: 'products', element: <Products/>},
            {path: 'products/:productId', element: <ProductDetails/>},
        ],
        errorElement: <Error/>,
    },
]);

export default function App() {
    return <RouterProvider router={router}/>;
}
