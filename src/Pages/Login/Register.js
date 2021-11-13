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
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Register.css';

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert('Your password did not match');
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <div className='register-image'>
      <Container>
        <Grid container spacing={2}>
          <Grid item sx={{ mt: 8 }} xs={12} md={12}>
            <Typography variant='body1' gutterBottom>
              Register
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: '30%', m: 1 }}
                  id='outlined-basic'
                  label='Your Name'
                  name='name'
                  onBlur={handleOnBlur}
                  variant='outlined'
                />
                <br />
                <TextField
                  sx={{ width: '30%', m: 1 }}
                  id='outlined-basic'
                  label='Your Email'
                  name='email'
                  type='email'
                  onBlur={handleOnBlur}
                  variant='outlined'
                />{' '}
                <br />
                <TextField
                  sx={{ width: '30%', m: 1 }}
                  id='outlined-basic'
                  label='Your Password'
                  type='password'
                  name='password'
                  onBlur={handleOnBlur}
                  variant='outlined'
                />{' '}
                <br />
                <TextField
                  sx={{ width: '30%', m: 1 }}
                  id='outlined-basic'
                  label='ReType Your Password'
                  type='password'
                  name='password2'
                  onBlur={handleOnBlur}
                  variant='outlined'
                />{' '}
                <br />
                <Button
                  color='error'
                  sx={{ width: '30%', m: 1, backgroundColor: '#da1563' }}
                  type='submit'
                  variant='contained'
                >
                  Register
                </Button>
                <br />
                <a style={{ textDecoration: 'none' }} href='/login'>
                  <Button variant='text' sx={{ color: 'white' }}>
                    Already Registered? Please Login
                  </Button>
                </a>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert sx={{
                    width: '30%',
                    margin: '0 auto',
                  }} severity='success'>User Created successfully!</Alert>
            )}
            {authError && <Alert sx={{
                    width: '30%',
                    margin: '0 auto',
                  }} severity='error'>{authError}</Alert>}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
