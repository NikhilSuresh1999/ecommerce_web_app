
import React, { useEffect } from 'react';
import AdressCard from '../AdressCard/AdressCard';
import OrderTracker from './OrderTracker';
import { Box, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const OrderDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  const navigate=useNavigate();

  useEffect(() => {
    const data = { orderId: params.orderId };
    dispatch(getOrderById(data.orderId));
  }, [params.orderId]);

  const handleBack = () => navigate(-1);


  return (
    <div className='px-5 lg:px-20'>

<div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor:pointer"
          onClick={handleBack}
        />
        </section>
        </div>


      <div>
        <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
        <AdressCard   address={order.order?.shippingAddress} />
        {console.log("order is ", order)}
      </div>
      <div className='py-20'>
        <OrderTracker activeStep={3} />
      </div>
      <Grid className='space-y-5' container>
        {order.order?.orderItems?.map((item) => (
          <Grid
            key={item.id}
            item
            container
            className='shadow-xl rounded-md p-5 border'
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Grid item xs={6}>
              <div className='flex items-center space-x-4'>
                <img className='w-[5rem] h-[5rem] object-cover object-top' src={item?.product?.imageUrl} alt='' />
                <div className='space-y-2 ml-5'>
                  <p className='font-semibold'>{item.product.title}</p>
                  <p className='space-x-5 opacity-50 text-xs font-semibold'>
                    <span>{`Color: ${item.product.color} Size: ${item.size}`}</span>
                  </p>
                  <p>{`Seller: ${item.product.brand}`}</p>
                  <p>{`₹${item.price}`}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <Box sx={{ color: deepPurple[500] }}>
                <StarIcon sx={{ fontSize: '2rem' }} className='px-2 text-5xl' />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
