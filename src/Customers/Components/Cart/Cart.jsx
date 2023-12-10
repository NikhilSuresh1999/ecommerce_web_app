import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button, Divider, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action'
import { store } from '../../../State/store'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Cart=()=>{


  const dispatch=useDispatch();
  const navigate=useNavigate();
  const{cart}=useSelector(store=>store)
  const handleCheckOut=()=>{
    navigate("/checkout?step=2")
  }

  

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem,cart.deleteCartItem])

  const handleBack = () => navigate(-1);


  return (
    <div>

<div>
      <section className={` ml-5 bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor:pointer"
          onClick={handleBack}
        />
        </section>
        </div>

      <div className='lg:grid grid-cols-3 lg:px-16 relative'>

        <div className='col-span-2'>
       {cart.cart?.cartItems.map((item)=> <CartItem item={item} />)}

        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
        <div className='border'>
          <p className='upperCase font-bold opacity-60 pb-4'>Price Details</p>
          <hr/>
          <div className='space-y-3 font-semibold mb-10 '>
            <div className='flex justify-between pt-3 text-black'>
              <span>Price</span>
              <span>₹{cart.cart?.totalPrice}</span>

            </div>

            <div className='flex justify-between pt-3'>
              <span>Discount</span>
              <span className='text-green-600'>-₹{cart.cart?.discount}</span>

            </div>

            <div className='flex justify-between pt-3'>
              <span>Delevery Charges</span>
              <span className='text-green-600'>Free</span>

            </div>
            <div className='flex justify-between pt-3  font-bold'>
              <span>Total Amount</span>
              <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>

            </div>

          </div>

          <Button onClick={handleCheckOut} color="secondary" variant="contained" className='w-full mt-5' sx={{px:"2.5rem",py:"0.7rem"}}>Checkout</Button>
          

          
        </div>
      

      </div>
        

        </div>
       
     


      

      

    
    </div>
  )
}

export default Cart