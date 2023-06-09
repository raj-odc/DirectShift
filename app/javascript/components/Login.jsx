import React, {useState} from 'react';


import { useContext } from 'react'
import {
    BrowserRouter as Router,
    useNavigate
  } from "react-router-dom";

  import Avatar from '@mui/material/Avatar';
  import Button from '@mui/material/Button';
  import CssBaseline from '@mui/material/CssBaseline';
  import TextField from '@mui/material/TextField';
  import Link from '@mui/material/Link';
  import Grid from '@mui/material/Grid';
  import Box from '@mui/material/Box';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';


import UserContext from '../contexts/user.context'

import { loginUser } from "../utils/backend-api";


const LoginPage = ({ children }) => {

  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [currentUser, setCurrentUser] = useContext(UserContext)

  const handleSubmit = async() => {
    try {
        const userParams = {
            user: {
                email: email, 
                password: password
            }
        }
        const user = await loginUser(userParams);
        setCurrentUser(user.data);
        navigate("/");
    }
    catch(err) {
        alert(err);
    }
  }

  return (<React.Fragment>
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <Button
              onClick={handleSubmit} 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container></React.Fragment>
  );
};

export default LoginPage;
