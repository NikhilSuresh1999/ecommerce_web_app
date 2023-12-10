
import { Grid } from '@mui/material';
import React from 'react';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({ orderData }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/account/order/${orderData.id}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        {orderData?.orderItems?.map((item, index) => (
          <Grid key={index} item xs={12}>
            <div className='flex cursor-pointer mt-3'>
              <img className='w-[5rem] h-[5rem] object-cover object-top' src={item.product?.imageUrl} alt='' />

              <div className='ml-5 space-y-2'>
                <p className=''>{item.product.title}</p>
                <p className='opacity-50 text-xs font-semibold'>Size: {item.size}</p>
                <p className='opacity-50 text-xs font-semibold'>Color: {item.product.color}</p>
              </div>
            </div>
          </Grid>
        ))}

        <Grid item xs={6}>
          {/* Additional details like total amount, delivery status, etc. */}
          <p className='mt-3'>Total: ₹{orderData.totalPrice}</p>
        </Grid>

        <Grid item xs={6}>
          {orderData.isDelivered ? (
            <div>
              <p className='mt-3'>
                <AdjustIcon sx={{ width: "15px", height: "15px" }} className='text-green-600 mr-2 text-sm' />
                <span>Delivered on {orderData.deliveryDate}</span>
              </p>
              <p className='text-xs'>Your Item Has Been Delivered</p>
            </div>
          ) : (
            <p className='mt-3'>
              <span>Expected Delivery on {orderData.expectedDeliveryDate}</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
