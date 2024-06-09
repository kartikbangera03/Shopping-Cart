import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Store from './components/Store.jsx';
import Checkout from './components/Checkout.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true , element:<Home/>},
      {path:"store" , element:<Store/>},
      {path:"checkout" , element:<Checkout/>},
    ],
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
