import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormikConsumer, useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUserProfile } from "../../../State/Auth/Action";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ProfileModel({open,handleClose}) {
   const [uploadng, setUploading] = React.useState(false);
  // //const [open, setOpen] = React.useState(false);
   const dispatch = useDispatch();
  const [selectedImage,setSelectedImage]=React.useState("");
  // const {auth}=useSelector(store=>store)
 
   const handleSubmit = (values) => {
    console.log("updated ",values)
   dispatch(updateUserProfile(values))

    console.log("handle submit",values);
  //   setSelectedImage("")

  };
  const jwt = localStorage.getItem("jwt");

  const { auth } = useSelector(store => store);

  React.useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);



  const formik = useFormik({
    initialValues: {
      firstName: auth.user?.firstName,
      lastName: auth.user?.lastName,
      email: auth.user?.email,
      mobile:auth.user?.mobile
    
    },
    onSubmit: handleSubmit,
  });

  //const {auth,twit}=useSelector(store=>store)

  // const handleImageChange = async(event) => {
  //   setUploading(true);
  //   const { name } = event.target;
    //const file = await uploadToCloudinary(event.target.files[0])
    // formik.setFieldValue(name, file);
    // setSelectedImage(file);
    // setUploading(false);
  //};

  return (
    <div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <IconButton onClick={handleClose} area-label="delete">
                  <CloseIcon />
                </IconButton>
                <p className="">Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div className=" hideScrollBar overflow-y-scroll overflow-x-hidden h-[80vh]">
              <React.Fragment>
                <div className="w-full">
                  <div className="relative">
                    <img
                      className="w-full h-[12rem] object-cover object-center"
                      src="https://cdn.pixabay.com/photo/2023/09/05/18/18/eurasian-pygmy-owl-8235621_1280.jpg"
                      alt=""
                    />

                   
                  </div>
                </div>

                <div className="w-full transform -translate-y-20 ml-4 h-[6rem]">
                  <div className="relative">
                    <Avatar
                      sx={{
                        width: "10rem",
                        height: "10rem",
                        border: "4px solid white",
                      }}
                      // src={auth.user?.image || selectedImage}
                    />

                   
                  </div>
                </div>
              </React.Fragment>
              <div className="space-y-3">
                <TextField
                  fullWidth
                  id="firstName"
                  name="firstName"
                  label="First Name"
                   value={ formik.values.firstName}
                 // value={auth.findUser?.fullName || formik.values.fullName}

                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />





   



                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />

                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="MAIL ID"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.email && Boolean(formik.errors.email)
                  }
                  helperText={formik.touched.email && formik.errors.email}
                />

                <TextField
                  fullWidth
                  id="mobile"
                  name="mobile"
                  label="Mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.mobile && Boolean(formik.errors.mobile)
                  }
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
                {/* <div className="my-3">
                  <p className="text-lg">Birth data . Edit</p>
                  <p className="text-2xl">August 10, 2001</p>
                </div>
                <p className="py-3 text-lg">Edit Professional Profile</p> */}
              </div>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
              }

              

