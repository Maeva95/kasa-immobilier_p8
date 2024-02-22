import React from 'react'
import reportWebVitals from './reportWebVitals.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./App.module.scss"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/index.jsx'
import Home from './pages/Home/index.jsx'
import Apartment from './pages/Apartment/index.jsx'
import About from './pages/About/index.jsx'

const routes = [
  {
    path: '/home',
    component: <Home />,
  },
  {
    path: '/apartment/:id',
    component: <Apartment />,
  },
  {
    path: '/about',
    component: <About />,
  },

]
const router = createBrowserRouter(
  [
    {
      path:'/*',
      element: <App routes={routes}/>,
      errorElement: <ErrorPage />
    },
    ...routes.map((route) => ({
      path: route.path,
      element: route.component
    }))
  ],
  // { basename: import.meta.env.DEV ? '/' : '/P8_Kasa-immo/' }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
