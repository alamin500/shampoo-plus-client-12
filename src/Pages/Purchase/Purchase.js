import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';

const Purchase = () => {
  const { purchaseId } = useParams();
  const { user } = useFirebase();
  const [services, setServices] = useState([]);
  const [success, setSuccess] = useState(null);
  // const [books, setBooks] = useState([]);
  // const { setUsername } = useAuth();
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [success]);
  const value = services.filter((service) => service._id === purchaseId)[0];
  const myBook = (data) => {
    data.email = user?.email;
    data._id = `${Math.random()}`;
    setSuccess(true);
    // setUsername(books.length + 1);
    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setSuccess(result));
  };
  // useEffect(() => {
  //   fetch(`http://localhost:5000/myBooks/${user?.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, [user.email, success]);
  return (
    <div>
      <Container>
        <Grid container spacing={2} sx={{ display: 'flex' }}>
          <Grid xs={12} sm={6} md={6}>
            <h1>Contract Adress</h1>

            <Box sx={{ marginBottom: '10px' }}>
              <Typography
                sx={{ margin: '0' }}
                variant='h5'
                gutterBottom
                component='div'
              >
                Name
              </Typography>
              <TextField
                id='outlined-read-only-input'
                label={user.displayName}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ margin: '0' }}
                variant='h5'
                gutterBottom
                component='div'
              >
                Email
              </Typography>
              <TextField
                id='outlined-read-only-input'
                label={user.email}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <h1>Product Information</h1>
            <Box
              sx={{
                display: 'flex',
                textAlign: 'left',
                justifyContent: 'center',
                alignItems: 'center',

              }}
              className='d-flex justify-content-center align-items-center'
            >
              <Box sx={{ margin: '10px' }}>
                <img

                  height='80px'
                  src={value?.img}
                  className='book-img'
                  alt=''
                />
              </Box>


              <Box>
                <Box sx={{ marginBottom: '10px' }}>
                  <Typography
                    sx={{ margin: '0' }}
                    variant='h5'
                    gutterBottom
                    component='div'
                  >
                    Product
                  </Typography>
                  <TextField
                    id='outlined-read-only-input'
                    label={value?.name}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
                <Box sx={{ marginBottom: '10px' }}>
                  <Typography
                    sx={{ margin: '0' }}
                    variant='h5'
                    gutterBottom
                    component='div'
                  >
                    Description
                  </Typography>
                  <TextField
                    id='outlined-multiline-static'
                    label={value?.description}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Box>
                </Box>

            </Box>
          </Grid>
        </Grid>
        <br />
        {success ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {' '}
            <h4
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '',
              }}
            >
              Confirmed
            </h4>{' '}
            <h3
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40px',
                width: '40px',
                borderRadius: '50%',
                background: 'green',
                color: '#fff',
              }}
            >
              {' '}
              ✓
            </h3>
          </div>
        ) : (
          <Button
            sx={{ backgroundColor: '#da1563' }}
            variant='contained'
            color='error'
            onClick={() => myBook(value)}
          >
            {' '}
            Purchase {value?.name.toLowerCase()}
          </Button>
        )}
      </Container>
    </div>
  );
};

export default Purchase;
