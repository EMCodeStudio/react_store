
import './App.scss'
import Category from './Components/Category/Category';
import Home from './Routes/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/post-view/:id",
          element: <PostView />,
        },
      ],
    },

    {
      path: "/category",
      element: <Category />,
      errorElement: <ErrorPage />,
    },
    /* 
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fqa",
    element: < FQA />,
    errorElement: <ErrorPage />,
  }, */

  ]);

  return (
    <div className="app">
      < RouterProvider router={router} />
    </div>
  )
}

export default App
