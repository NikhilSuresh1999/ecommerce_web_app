// import React, { useState,useRef } from "react";

// import "react-alice-carousel/lib/alice-carousel.css";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import { Button } from "@mui/material";

// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import { mens_kurta } from "../../../Data/mens_kurta";
// import AliceCarousel from "react-alice-carousel";

// const HomeSectionCarosel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 4 },
//   };

//   const slidePrev = () => {
//     setActiveIndex(activeIndex - 1);
//     console.log(activeIndex);
//   };
//   const slideNext = () => {
//     setActiveIndex(activeIndex + 1);
//     console.log(activeIndex);
//   };

//   const syncActiveIndex = ( {item}) => setActiveIndex(item);

//   const items = mens_kurta
//     .slice(0, 30)
//     .map((item) => <HomeSectionCard product={item} />);
//   return (
//     <div className="border">
//       <div className="relative p-5 ">
//         <AliceCarousel
//          mouseTracking
//          activeIndex={activeIndex}
         
//           items={items}
//           //disableButtonsControls
//           responsive={responsive}
//           disableDotsControls
//           slideToIndex={activeIndex}
//           //onSlideChanged={syncActiveIndex}
//           keyboardNavigation={true}
          
//           controlsStrategy="responsive"
         
          
//         />

//         <Button

//           onClick={slideNext}
//           variant="contained"
//           className="z- bg-white"
          
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             right: "0rem",
//             transform: "translateX(50%) rotate(90deg)",
//             bgcolor: "white",
//           }}
//           aria-label="next"
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>

//         <Button
//           onClick={slidePrev}
//           variant="contained"
//           className="z- bg-white"
//           sx={{
//             position: "absolute",
//             top: "8rem",
//             left: "0rem",
//             transform: "translateX(-50%) rotate(-90deg)",
//             bgcolor: "white",
//           }}
//           aria-label="prev"
//         >
//           <KeyboardArrowLeftIcon
//             sx={{ transform: "rotate(90deg)", color: "black" }}
//           />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarosel;



import React, { useState, useRef } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import AliceCarousel from "react-alice-carousel";
//import { mens_kurta } from "../../../Data/mens_kurta";

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 15).map((item) => (
    <HomeSectionCard product={item} />
  ));

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideNext();
    }
  };

  return (
    <div className="border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
         // mouseTracking
          activeIndex={activeIndex}
          disableButtonsControls
          items={items}
          responsive={responsive}
          disableDotsControls
          ref={carouselRef}
        />

       {activeIndex !== items.length-5 && <Button
          variant="contained"
          className="z- bg-white"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}

        {activeIndex !==0 &&<Button
          onClick={slidePrev}
          variant="contained"
          className="z- bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="prev"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
