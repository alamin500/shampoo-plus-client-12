import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import Grid from '@mui/material/Grid';
import { Container, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TextField from '@mui/material/TextField';
const Footer = () => {
  return (
    <Box
      sx={{
        marginTop: '20px',
        overflow: 'hidden',
        backgroundColor: '#1c1b38',
      }}
      className='container'
    >
      <Grid container spacing={2} className='footer-image'>
        <Grid xs={12} item sm={7} md={7}>
          <br />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Box>
              <div className=' w-50 m-3 text-center footer-us'>
                <Typography
                  sx={{ color: 'white', fontWeight: 'bold' }}
                  variant='h4'
                  gutterBottom
                  component='div'
                >
                  SUBSCRIBE TO OUR NEWSLETTER
                </Typography>
                <Typography
                  sx={{ color: 'white' }}
                  variant='body2'
                  gutterBottom
                  component='div'
                >
                  Subscribe to the Shampoo Plus newsletter and stay updated on
                  the latest special offers!
                </Typography>
              </div>
              <div className='d-flex m-3 w-50 m-3'>
                <TextField
                  sx={{ margin: '2px' }}
                  id='filled-basic'
                  label='Email'
                  variant='outlined'
                />
                <Button
                  color='error'
                  sx={{
                    margin: '2px',
                    padding: '15px',
                    backgroundColor: '#da1563',
                  }}
                  variant='contained'
                  size='large'
                >
                  SUBSCRIBE
                </Button>
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} item sm={5} md={5}>
          <img
            height='250px'
            className='subscribe-image'
            src='https://i.ibb.co/gzwbZgr/subscribe-newsletter-with-people-working-together-free-vector.jpg'
            alt=''
          />
        </Grid>
      </Grid>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <Grid xs={12} md={4} lg={4} className='col-md-6'>
            <div className='left-container text-start'>
              <br />
              <Typography
                sx={{ color: '#d7165f' }}
                variant='h4'
                gutterBottom
                component='div'
              >
                SHAMPOO PLUS
              </Typography>

              <p className=''>
                <small className='footer-menu'>
                  227 Marion street New York USA. Street, 4916 Pinewood Drive.{' '}
                  <br />
                  City, Park Ridge. State/Province abbr, IL. <br />{' '}
                  State/Province full, Illinois. Zip Code/Postal code, 60068.
                </small>
              </p>
              <Link className='footer-link'>trendytravel.net</Link>
              <br />
              <Link className='footer-link'>trendytravel@mail.com</Link>

              <p className='mt-2'>
                <small className='footer-menu'>
                  Colac © . All rights reserved.
                </small>
              </p>
            </div>
          </Grid>
          <Grid xs={6} md={2} lg={2} className='col-md-3'>
            <div className='footer-menu-container'>
              <br />
              <br />
              <ul>
                <Link className='footer-link'>
                  <li className='footer-menu'>Booking Tours</li>
                </Link>
                <hr className='line' />
                <li className='footer-menu'>Rental Hotels</li>
                <hr className='line' />
                <li className='footer-menu'>Hostel World</li>
                <hr className='line' />
                <li className='footer-menu'>Trivago New</li>
              </ul>
            </div>
          </Grid>
          <Grid xs={6} md={2} lg={2} className='col-md-3'>
            <div className='footer-menu-container'>
              <ul>
                <br />
                <br />
                <Link className='footer-link'>
                  <li className='footer-menu'>Machu Picchu</li>
                </Link>
                <hr className='line' />
                <li className='footer-menu'> National Park</li>
                <hr className='line' />
                <li className='footer-menu'> Pitons, St Lucia</li>
                <hr className='line' />
                <li className='footer-menu'> Pamukkale, Turkey</li>
              </ul>
            </div>
          </Grid>

          <Grid xs={6} md={2} lg={2}>
            <Box className='footer-menu-container'>
              <br />
              <Typography
                sx={{ color: '#d7165f' }}
                variant='h6'
                gutterBottom
                component='div'
              >
                PAMENT METHOD
              </Typography>
              <ul>
                <Box sx={{ color: 'white' }}>
                  <AccountBalanceIcon />
                </Box>
                <Box sx={{ color: 'white' }}>
                  <CreditCardIcon />
                </Box>
                <Box sx={{ color: 'white' }}>
                  <PaymentsIcon />
                </Box>
                <Box sx={{ color: 'white' }}>
                  <AccountBalanceWalletIcon />
                </Box>
              </ul>
            </Box>
          </Grid>
          <Grid xs={6} md={2} lg={2} className='footer-menu-container'>
            <Box>
              <ul>
                <Typography
                  sx={{ color: '#d7165f', marginTop: '25px' }}
                  variant='h6'
                  gutterBottom
                  component='div'
                >
                  FOLLOW US
                </Typography>

                <Box sx={{ color: 'white' }}>
                  <FacebookIcon />
                </Box>
                <Box sx={{ color: 'white' }}>
                  <InstagramIcon />
                </Box>
                <Box sx={{ color: 'white' }}>
                  <TwitterIcon />
                </Box>
                <Box sx={{ color: 'white' }}>
                  <LinkedInIcon />
                </Box>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
