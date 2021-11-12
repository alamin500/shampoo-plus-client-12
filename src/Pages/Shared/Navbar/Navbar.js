import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
          </Typography>
          <Link to='/products' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color='inherit'>Products</Button>
      </Link>



      <Link to='/reviews' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color='inherit'>Reviews</Button>
          </Link>



          {user?.email ? (
            <Box>
              <Link to='/myOrders' style={{ textDecoration: 'none', color: 'white' }}>
            <Button color='inherit'>My Orders</Button>
          </Link>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to='/dashboard'
              >
                <Button variant="contained" color="error">Dashboard</Button>
              </NavLink >

              <Button onClick={logout} color='inherit'>
                Logout
              </Button>

            </Box>
          ) : (
            <NavLink
              style={{ textDecoration: 'none', color: 'white' }}
              to='/login'
            >
              <Button color='inherit'>Login</Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
