import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Antecedentes from './pages/Antecedentes'
import Problematica from './pages/Problematica'
import Solucion from './pages/Solucion'
import ModulosPropuestos from './pages/ModulosPropuestos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Index/>
      },
      {
        path: '/antecedentes',
        element: <Antecedentes/>
      },
      {
        path: '/problematica',
        element: <Problematica/>
      },
      {
        path: '/solucion',
        element: <Solucion/>
      },
      {
        path: '/modulos-propuesto',
        element: <ModulosPropuestos/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
