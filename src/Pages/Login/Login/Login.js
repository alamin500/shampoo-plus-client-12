import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <div className='login-image'>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={12}>
            <Typography variant='h6' gutterBottom>
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: '30%', m: 1 }}
                id='outlined-basic'
                label='Your Email'
                name='email'
                onChange={handleOnChange}
                variant='outlined'
              />
              <br />
              <TextField
                sx={{ width: '30%', m: 1 }}
                id='outlined-basic'
                label='Your Password'
                type='password'
                name='password'
                onChange={handleOnChange}
                variant='outlined'
              />
              <br />
              <Button
                color='error'
                sx={{ backgroundColor: '#da1563', width: '30%', m: 1 }}
                type='submit'
                variant='contained'
              >
                Login
              </Button>
              <br />
              <a style={{ textDecoration: 'none' }} href='/register'>
                <Button variant='text' sx={{ color: 'white' }}>
                  New User? Please Register
                </Button>
              </a>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert
                  sx={{
                    width: '30%',
                    margin: '0 auto',
                  }}
                  severity='success'
                >
                  Login successfully!
                </Alert>
              )}
              {authError && (
                <Alert
                  sx={{
                    width: '30%',
                    margin: '0 auto',
                  }}
                  severity='error'
                >
                  {authError}
                </Alert>
              )}
            </form>
            <br />
            <Button
              onClick={handleGoogleSignIn}
              variant='contained'
              color='error'
              sx={{
                backgroundColor: '#da1588',
                width: '30%',
                m: 1,
              }}
            >
              Google Sign In
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
