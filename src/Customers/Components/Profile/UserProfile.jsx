import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate, useParams } from "react-router-dom";
import { Avatar, Box, Button, Grid, Tab, Tabs } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";



import ProfileModal from "./ProfileModel.jsx";
import { useDispatch, useSelector } from "react-redux";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { getUser } from "../../../State/Auth/Action.js";






const UserProfile = () => {

   const [tabValue,setTabValue]=useState("1");
   const navigate = useNavigate();
   const[openProfileModel,setOpenProfileModel]=useState(false);
   const handleOpenProfileModel = () => setOpenProfileModel(true);
  const handleClose = () => setOpenProfileModel(false);
  // const {auth,twit}=useSelector(store=>store)
   const dispatch=useDispatch()
  const {id}=useParams()

  

  const jwt = localStorage.getItem("jwt");

  const handleBack = () => navigate(-1);

  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);



 
  // const handleFollowUser = () => {
  //   dispatch(followUserAction(id))
  //   console.log("open Profile model");
  // };

  const handleTabChange=(event,newValue)=>{
    setTabValue(newValue)
    if(newValue===4)
    {
      console.log("Likes twit")
    }
    else if(newValue==="1")
    {
      console.log("users twits")
    }
  };
  // useEffect(()=>{
  //   dispatch(findUserById(id))
  //   dispatch(getUsersTweets(id))
  // },[id])


  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor:pointer"
          onClick={handleBack}
        />

        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">
          {auth.user?.firstName +" "+ auth.user?.lastName} 
        </h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src="https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg"
          alt=""
        />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          {/* <Avatar
            className="transform -translate-y-24"
            alt="cade with lint"
            // src=auth.findUser?.image
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          /> */}

          {/* {auth.findUser?. */}
         { true? (
            <Button
               onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              // onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              auth.findUser?.followed? "unfollow" : "follow"
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-xl">{auth.user?.firstName +" "+ auth.user?.lastName} </h1>
            {true && (
              <img
                className="ml-2 w-7 h-7"
                src="https://static.vecteezy.com/system/resources/previews/015/304/837/original/blue-verified-tick-valid-seal-icon-in-flat-style-design-isolated-on-white-background-validation-concept-vector.jpg"
              />
            )}
          </div>
          <h1 className="text-gray-500 text-xl my-2">Email: {auth.user?.email}</h1>
        </div>
        <div>
        <h1 className="text-gray-500 text-xl">Mobile: {auth.user?.mobile}</h1>

        </div>
        


        <div  className=" " container spacing={2} sx={{ justifyContent: "space-between" }}>
          <h1 className=" text-xl my-7 font-bold"> Available Address</h1>
        {auth?.user?.address.map((item,index) => (
          <Grid className='mt-0 border'key={index} item xs={20}>
            <div className='flex cursor-pointer mt-3'>
              

              <div className='ml-5 space-y-2'>
                <p className='my-2 text-50px'>Street Address: {item.streetAddress}</p>
                <p className=' my-2 opacity-50 text-50px font-semibold'>City: {item.city}</p>
                <p className='my-2 opacity-50 text-50px font-semibold'>State: {item.state}</p>
                <p className='my-2 opacity-50 text-50px font-semibold'>Mobile: {item.mobile}</p>
                <p className='my-2 opacity-50 text-50px font-semibold'>Zip Code: {item.zipCode}</p>
              </div>
            </div>
          </Grid>
          
        ))}

        </div>

       
      </section>
      {/* <section className="py-5">
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{twit?.twits?.map((item)=>
        <TweetCard item={item} />
        )}</TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>

      </section> */}

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModel}/>
      </section>
    </div>
  );
};

export default UserProfile;
