import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useContext } from 'react'
import {
  useSearchParams,
  BrowserRouter as Router,
  useNavigate
} from "react-router-dom";


import { signupUser } from "../utils/backend-api";


import UserContext from '../contexts/user.context'

const Signup = () => {
  let navigate = useNavigate();


  const [searchParams] = useSearchParams();
  const referralCode = searchParams.get('referral_code');


  const [currentUser, setCurrentUser] = useContext(UserContext)
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConf, setPasswordConf] = React.useState('');


  const handleSubmit = async() => {
    if(password!==passwordConf){
      alert('Password and Password Confirmation should be same');
      return false;
    }
    const params = {
      user: {
        name: 'test',
        email: email, 
        password: password, 
        password_confirmation: passwordConf,
        referral_code: referralCode
      }

    }
    const user = await signupUser(params);
    setCurrentUser(user.data);
    navigate("/")
  }


  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setPasswordConf(e.target.value)}
                  label="Password Confirmation"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}
//   // return (
//   //   <div style={{ padding: 30 }}>
//   //     <Paper>
//   //       <Grid
//   //         container
//   //         spacing={3}
//   //         direction={'column'}
//   //         alignItems={'center'}
//   //       >
//   //         <Grid item xs={12}>
//   //           <TextField onChange={(e) => setEmail(e.target.value)} label="Email"></TextField>
//   //         </Grid>
//   //         <Grid item xs={12}>
//   //           <TextField onChange={(e) => setPassword(e.target.value)} label="Password" type={'password'}></TextField>
//   //         </Grid>
//   //         <Grid item xs={12}>
//   //           <TextField onChange={(e) => setPasswordConf(e.target.value)} label="Password Confirmation" type={'password'}></TextField>
//   //         </Grid>
//   //         <Grid item xs={12}>
//   //           <Button variant="contained" onClick={handleSubmit} fullWidth> Signup </Button>
//   //         </Grid>
//   //       </Grid>
//   //     </Paper>
//   //   </div>
//   // );
// };

export default Signup;
