import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../State/store'
import { usersOrderHistory } from '../../../State/Order/Action'

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from 'react-router-dom'

const orderStatus=[
  {label:"On the Way",value:"on The Way"},
  {label:"Delivered",value:"Deliverd"},
  {label:"Cancel",value:"Cancel"},
  {label:"Returned",value:"Returned"}
]

const Order=() =>{

  const dispatch=useDispatch();
  const navigate=useNavigate()

   const {order}=useSelector(store=>store)

   const handleBack = () => navigate(-1);


   useEffect(()=>{
    
    dispatch(usersOrderHistory())

  },[]);




  return (
    <div className='px:5 lg:px-20'>

<div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor:pointer"
          onClick={handleBack}
        />
        </section>
        </div>

      <Grid container sx={{justifyContent:"space-between"}}>
       

        <Grid item xs={9}>

          <div className='space-y-5'>

         

          {/* {order?.order && order.order.map((item, index) => (
          <OrderCard key={index} orderData={item} />
                      ))} */}

{Array.isArray(order?.order) && order.order.map((item, index) => (
  <OrderCard key={index} orderData={item} />
))}
          

          


          </div>

          



        </Grid>

      </Grid>
    </div>
  )
}

export default Order