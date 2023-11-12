import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCaroselData } from './MainCaroselData';





const MainCarosel = () => {
   const items=mainCaroselData.map((item)=>
   <img className='cursor-pointer -z-10 w-full object-cover h-[60rem]' role='presentation' src={item.image} alt=''/>
   
   )

   return(

    <AliceCarousel
       // mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={800}
        infinite
       
        
    />
   )
};

export default MainCarosel;