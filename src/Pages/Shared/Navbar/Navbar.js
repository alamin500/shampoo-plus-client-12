import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { slide as Menu } from 'react-burger-menu';
const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px',
    },
    bmBurgerBars: {
      background: '#373a47',
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background: '#bdc3c7',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: '#373a47',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display: 'inline-block',
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)',
    },
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#9a0594' }} position='static'>
        <Toolbar>
          <Menu styles={styles}>
            <ul>
              <li>
                <a id='home' className='menu-item' href='/'>
                  Home
                </a>
              </li>
              <li>
                <a id='home' className='menu-item' href='/'>
                  Home
                </a>
              </li>
            </ul>

            <a
              onClick={() => setOpen(false)}
              className='menu-item--small'
              href=''
            >
              Settings
            </a>
          </Menu>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              Home
            </Link>
          </Typography>
          <Link
            to='/products'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button color='inherit'>Products</Button>
          </Link>

          <Link
            to='/reviews'
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button color='inherit'>Reviews</Button>
          </Link>

          {user?.email ? (
            <Box>
              <Link
                to='/myOrders'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button color='inherit'>My Orders</Button>
              </Link>
              <NavLink
                style={{ textDecoration: 'none', color: 'white' }}
                to='/dashboard'
              >
                <Button
                  variant='contained'
                  sx={{ backgroundColor: '#da1563' }}
                  color='error'
                >
                  Dashboard
                </Button>
              </NavLink>
              <span >{user.displayName}</span>
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
