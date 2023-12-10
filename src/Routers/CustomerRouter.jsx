import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'






import HomePage from '../Customers/Components/Pages/HomePages/HomePage'
import Cart from '../Customers/Components/Cart/Cart'
import Products from '../Customers/Components/Products/Products'
import ProductDetails from '../Customers/Components/ProductDetails/ProductDetails'
import Footer from '../Customers/Components/Footer/Footer'
import Navigation from '../Customers/Components/Navigation/Navigation'
import Checkout from '../Customers/Components/Checkout/Checkout'
import Order from '../Customers/Components/Order/Order'
import OrderDetails from '../Customers/Components/Order/OrderDetails'
import PaymentSuccess from '../Customers/Components/Payment/PaymentSuccess'
import UserProfile from '../Customers/Components/Profile/UserProfile'
import Alerts from '../Customers/Components/Alerts'
import { useSelector } from 'react-redux'


const CustomerRouter=()=> {

  const [mode,setMode]=useState('login')
  const [alert,setAlert]=useState(null)

  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  const islogin=()=>
  {
    if(jwt=null)
    {
      showAlert("Login Success", "success")
      console.log("jwt is ",jwt)
      return true;
    }
    console.log("jwt is ",jwt)
    return false;
    
  }
  
  const showAlert=(message,type)=>
  {
    
       setAlert({
        msg:message,
        type:type
       })
        setTimeout(() => {
        setAlert(null);
        
       },3000);
  }
  



  return (
    <div>
      <div>

     
      <Navigation  />
      
       

      </div>

      <Routes>

      <Route path='/login' element={<HomePage />}></Route>
      <Route path='/register' element={<HomePage/>}></Route>

        <Route path='/' element={<HomePage  />}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Products/>}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/account/order/' element={<Order/>}></Route>
        <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
        <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>
        <Route path='/payments/:orderId' element={<PaymentSuccess/>}></Route>
        <Route path='/account/user/:userId' element={<UserProfile/>}></Route>


         
      </Routes>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default CustomerRouter