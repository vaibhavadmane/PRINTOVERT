import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Orders from './components/Orders/Orders.jsx'
import Ticket from './components/Tickets/Ticket.jsx'
import Wallet from './components/wallet/Wallet.jsx'
import Layout from './pages/Layout/Layout.jsx'
import  Designlibrary  from './components/Design lib/Designlibrary.jsx'
import  Designproduct  from './components/Design product/Designproduct.jsx'
import TShirtDesigner from './components/Tshirtdesigner/TShirtDesigner.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Editprofile from './components/Editprofie/Editprofile.jsx'
<<<<<<< HEAD
// import Canva from './components/canvas/Canva.jsx'
const router = createBrowserRouter(
=======
import Login from './components/login/Login.jsx'
import Createorder from './components/createorders/Createorder.jsx'
import Needhelp from './components/needhelp/Needhelp.jsx'
const router = createBrowserRouter( 
>>>>>>> 05fd0b9729225685225d4619218787335764dce1
  createRoutesFromElements(
      <Route path = '/' element = {<Layout/>}>
      <Route path = '' element = {<Dashboard/>}/>
      <Route path = '/design-library' element = {<Designlibrary/>}/>
<<<<<<< HEAD
      {/* <Route path = '/design-product' element = {<Canva/>}/> */}
      <Route path = '/create-orders' element = {<TShirtDesigner/>}/>
=======
      <Route path = '/design-product' element = {<Designproduct/>}/>
      <Route path = '/create-orders' element = {<Createorder/>}/>
>>>>>>> 05fd0b9729225685225d4619218787335764dce1
      <Route path = '/orders' element = {<Orders/>}/>
      <Route path = '/tickets' element = {<Ticket/>}/>
      <Route path = '/wallet' element = {<Wallet/>}/>
      <Route path = '/edit-profile' element = {<Editprofile/>}/>
      <Route path = '/need-help' element = {<Needhelp/>}/>
      <Route path = '/login' element = {<Login/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {router} />
  </React.StrictMode>
)
