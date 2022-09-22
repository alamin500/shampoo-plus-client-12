import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Link, NavLink } from 'react-router-dom';
import { Container, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

export default function Navigation() {
  const { user, logout } = useAuth();
  const theme = useTheme();
  const useStyle = makeStyles({
    navItem: {
      color: '#fff',
      textDecoration: 'none',
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none !important',
      },
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none !important',
      },
    },
    navLogo: {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'Right !important',
      },
    },
    mobileNavItem: {
      textDecoration: 'none',
      color: '#000',
    },
  });
  const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } =
    useStyle();
  const [state, setState] = React.useState(false);
  const list = (
    <Box sx={{ width: 250 }} role='presentation'>
      <List>
        {user?.email ? (
          <Box>
            <NavLink
              style={{ textDecoration: 'none', color: 'red' }}
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
            <span>{user.displayName}</span>
            <Button onClick={logout} color='inherit'>
              Logout
            </Button>
          </Box>
        ) : (
          <NavLink style={{ textDecoration: 'none', color: 'red' }} to='/login'>
            <Button color='inherit'>Login</Button>
          </NavLink>
        )}
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to='/products'>
              Products
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText>
            <Link className={mobileNavItem} to='reviews'>
              Reviews
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar  sx={{ backgroundColor: 'black' }} position='fixed'>
          <Toolbar className='header-main'>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              className={navLogo}
              variant='h4'
              component='div'
              sx={{ flexGrow: 1, textAlign: 'left' }}
            >
              <Link style={{ textDecoration: 'none', color: 'red' }} to='/'>
                <img
                  className='TazaLogo'
                  src='https://i.ibb.co/vQy4n6B/Screenshot-32-removebg-preview.png'
                  alt=''
                />
              </Link>
            </Typography>
            <Box sx={{ display: 'flex' }} className={navItemContainer}>
              <Link
                to='/products'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                <Button className='menu-item' color='inherit'>Products</Button>
              </Link>
              <Link className={navItem} to='/reviews'>
                <Button className='menu-item' style={{ color: 'white' }}>Reviews</Button>
              </Link>

              {user?.email ? (
                <Box>
                  <Link
                    to='/myOrders'
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    <Button className='menu-item' color='inherit'>My Orders</Button>
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
                  <span>{user.displayName}</span>
                  <Button onClick={logout} style={{ color: 'white' }}>
                    Logout
                  </Button>
                </Box>
              ) : (
                <NavLink
                  style={{ textDecoration: 'none', color: 'white' }}
                  to='/login'
                >
                  <Button className='menu-item' style={{ color: 'white' }}>Login</Button>
                </NavLink>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer
            sx={{ backgroundColor: '#9a0594' }}
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      </div>
    </Container>
  );
}
