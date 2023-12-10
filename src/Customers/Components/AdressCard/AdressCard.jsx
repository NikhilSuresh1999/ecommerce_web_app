import React from 'react'

const AdressCard=({address})=> {
  return (
    <div>
      <div className='border'>
        <p  className='font-semibold my-2'>{address?.firstName +" "+address?.lastName}</p>
        <p>{address?.state},{address?.streetAddress},{address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>Mobile</p>
          <p>{address?.mobile}</p>
        </div>
      </div>


    </div>
  )
}

export default AdressCard