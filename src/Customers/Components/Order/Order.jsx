import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatus=[
  {label:"On the Way",value:"on The Way"},
  {label:"Delivered",value:"Deliverd"},
  {label:"Cancel",value:"Cancel"},
  {label:"Returned",value:"Returned"}
]

const Order=() =>{
  return (
    <div className='px:5 lg:px-20'>

      <Grid container sx={{justifyContent:"space-between"}}>
        <Grid item xs={2.5}>
          <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>

            <h1 className='font-bold text-lg'>Filter</h1>

            <div className='space-y-4 mt-10'>

              <h1 className='font-semibold'>ORDER STATUS</h1>

              {orderStatus.map((option)=> <div className='flex-items-center'>
                <input defaultValue={Option.value}  type='checkbox' className='h-4 w-4 bordergray-300 text-indigo-600 focus:ring-indigo-500'/>

                <label htmlFor={Option.value} className='ml-3 text-sm text-gray-600'>
                  {Option.label}
                </label>
              </div>)}

              

            </div>

          </div>


        </Grid>

        <Grid item xs={9}>

          <div className='space-y-5'>

          {[1,1,1,1,1,1].map((item)=><OrderCard/>)}

          </div>

          



        </Grid>

      </Grid>
    </div>
  )
}

export default Order