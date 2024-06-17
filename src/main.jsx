import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Store from './components/Store.jsx';
import Checkout from './components/Checkout.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import ItemDescription from './components/ItemDescription.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {index:true , element:<Home/>},
      {path:"store" , element:<Store/>},
      {path:"store/:id",element:<ItemDescription/>},
      {path:"checkout" , element:<Checkout/>},
      {path:"*",element:<ErrorPage/>}
    ],
  },


]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
