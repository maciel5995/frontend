import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './routes/Products.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import Info from './routes/Info.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products",
        element: <Products/>
      },
      {
        path: "/products/:id/info",
        element: <Info/>
      }
    ]
  },  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>  
  </StrictMode>,
)
