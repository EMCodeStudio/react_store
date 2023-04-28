
import './App.scss'
import Footer from './Components/Footer/Footer';
import Header_Menu from './Components/Header_Menu/Header_Menu';
import ErrorPage from './Routes/Error_Page/Error_Page';
import Home from './Routes/Home/Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import PageProduct from './Routes/Page_Product/Page_Product';
import PageCategory from './Routes/Page_Category/Page_Category';
import Page_Search from './Routes/Page_Search/Page_Search';


function Layout() {
  return (
    <div>
      <Header_Menu />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/:id",
        element: <PageProduct />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/category/:categoryName",
        element: <PageCategory />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/search-products/:productName",
        element: <Page_Search />,
        errorElement: <ErrorPage />,
      },
    ]
  }
])

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
