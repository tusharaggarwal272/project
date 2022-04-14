import { Typography } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'
import { Box } from '@mui/system';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { CircularProgress } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Home() {

  let user = localStorage.getItem('user');
  const [mobileverified, setMobileVerified] = useState(user?user.mobileverified:false);
  const [emailverified, setEmailVerified] = useState(user?user.emailverified:false);
  const [open, setOpen] = useState(mobileverified==true || emailverified==true);
  const [mobileotpreq, setmobileotpreq] = useState(false);
  const [emailotpreq, setemailotpreq] = useState(false);
  const [loading, setloading] = useState(false)
  const [otp, setotp] = useState();
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handlemobileotpreq = () => {
    setloading(true);
    setmobileotpreq(true);
    axios.post('/users/verification/mobileverified', { 'contact': user.contact }).then((res) => {
      console.log("mobile", res);
      setloading(false);
    })
    // setloading(false);
  };
  const handleemailotpreq = () => {
    setloading(true);
    setemailotpreq(true);
    axios.post('/users/verification/emailverified', { 'email': user.email }).then((res) => {
      console.log("email", res);
      setloading(false);
    })
  }

  const verifymobileotp = () => {
    setloading(true);
    axios.post('/users/verification/mobileverified/verify', { 'number': user.contact,otp:otp }).then((res) => {
      console.log(res);
      setMobileVerified(true);

      user.mobileverified = true;
      setloading(false);
    })
  }

  const verifyemailotp = () => {
    setloading(true);
    axios.post('/users/verification/emailverified/verify', { 'email': user.email,otp:otp }).then((res) => {
      console.log(res);
      user.emailverified = true;
      setEmailVerified(true);
      setloading(false);
    })
  }

  const handlechange = (e) => {

    setotp(e.target.value);
    // console.log(otp)
  }

  // useEffect(() => {
  //   axios.post('/api/users/mobileverified').then((res) => {
  //     console.log(res);
  //   })
  //   axios.post('/api/users/emailverified').then((res) => {
  //     console.log(res);
  //   })
  // }, [])



  if (user) {
    {
      user = JSON.parse(user);
      // setMobileVerified(user.mobileverified)
      // console.log(user, user.name)

    }
  }
  else {
    window.location.href = '/login'
  }
  return (
    
    <Box>
      <Navbar />
      <Typography>You are the home page congrats!</Typography>
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box variant="contained" sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            We want to know you More!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', m: 1 }}>
            <Typography>Mobile No:</Typography>
            <TextField
              // label="Mobile Number"
              variant="filled"
              // sx={{, width: 1 }}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
              size="small"
              value={user.contact}
            // onChange={(e) => handel({ name: e.target.value })}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {
                mobileverified == true ? <CheckCircleOutlineOutlinedIcon sx={{ background: 'green', width: '40%', height: '60%' }} /> :
                  mobileotpreq == false ? <Button sx={{ width: '20%' }} onClick={handlemobileotpreq}>Get OTP</Button> :
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><TextField onChange={(e) => handlechange(e)} label={'Enter OTP'} size='small' sx={{ m: 1 }} />
                      {
                        loading ? <CircularProgress /> : <Button onClick={verifymobileotp}>Verify</Button>
                      }
                    </Box>

              }
            </Box>



          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', m: 1 }}>
            <Typography>Email Id:</Typography>
            <TextField
              // label="Mobile Number"
              variant="filled"
              // sx={{, width: 1 }}
              sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
              size="small"
              value={user.email}
            // onChange={(e) => handel({ name: e.target.value })}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {
                emailverified == true ? <CheckCircleOutlineOutlinedIcon sx={{ background: 'green', width: '40%', height: '60%' }} /> :
                  emailotpreq == false ? <Button sx={{ width: '20%' }} onClick={handleemailotpreq}>Get OTP</Button> :
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><TextField label={'Enter OTP'} onChange={(e) => handlechange(e)} sx={{ m: 1 }} size='small' />
                      {
                        loading ? <CircularProgress /> : <Button onClick={verifyemailotp}>Verify</Button>
                      }
                    </Box>

              }
            </Box>
            {/* <Button sx={{ width: '20%' }} onClick={handleemailotpreq}>Get OTP</Button> */}

          </Box>



        </Box>
      </Modal>
    </Box>

  )
}

export default Home