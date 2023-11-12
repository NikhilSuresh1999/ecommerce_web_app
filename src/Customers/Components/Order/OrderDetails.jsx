import React from 'react'
import AdressCard from '../AdressCard/AdressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarIcon from '@mui/icons-material/Star';


const OrderDetails=()=> {
  


  return (
    <div className='px:5 lg:px-20'>
      <div>
        <h1 className='font-bold text-xl py-7'> Delivery Adress</h1>

      <AdressCard/>


      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3}/>
      </div>
      <Grid className='space-y-5' container>
        {[1,1,1,1,1,1].map((item)=><Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}}>

<Grid item xs={6}>
  <div className='flex items-center space-x-4'>
    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://static.cilory.com/273124-thickbox_default/nologo-navy-casual-shirt.jpg' alt=''/>
    <div className='space-y-2 ml-5'>

      <p className='font-semibold'>Men Slim Mid Rise Black Shirt</p>
      <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color:pink Size: M</span></p>
      <p>Seller: linaria</p>
      <p>₹5432</p>
    </div>
  </div>

</Grid>

<Grid item>

  <Box sx={{color:deepPurple[500]}}>

    <StarIcon sx={{fontSize:"2rem"}} className="px-2 text-5xl"/>
    <span>Rate & Review Product</span>


  </Box>

</Grid>

</Grid>)}


        

      </Grid>
      
    </div>
  )
}

export default OrderDetails