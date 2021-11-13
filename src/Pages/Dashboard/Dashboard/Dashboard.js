import  React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Button } from '@mui/material';
import AddProducts from '../AddProducts/AddProducts';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Pay from '../Pay/Pay';
import useAuth from '../../../hooks/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddReview from '../AddReview/AddReview';
const drawerWidth = 200;
function Dashboard(props) {
  const { user, logout, admin } = useAuth();
const [role, setRole] = useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  // const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar> <Typography sx={{fontWeight:700, color:'#da1563'}} variant='h5' noWrap component='div'>
         Dashboard
          </Typography> </Toolbar>
      <Divider />
      <Box>
        {user.email &&
          <Box>
            <Link
              to={`${url}`}
              style={{ textDecoration: 'none', color: '#da1563' }}
            >
              <Button color='inherit'>My Orders</Button>
            </Link>
            <Link
              to={`${url}/addReview`}
              style={{ textDecoration: 'none', color: '#da1563' }}
            >
              <Button color='inherit'>Add Review</Button>
            </Link>
            <br />
            <Link
              to={`${url}/pay`}
              style={{ textDecoration: 'none', color: '#da1563' }}
            >
              <Button color='inherit'>Pay</Button>
            </Link>
          </Box>
        }

        <hr />
          {admin && admin.length > 0  && admin.map((data)=>data.role &&  <>      <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: '#da1563' }}>
          <Button color='inherit'>Make Admin</Button>
        </Link>
        <Link
          to={`${url}/manageAllOrders`}
          style={{ textDecoration: 'none', color: '#da1563' }}
        >
          <Button color='inherit'>Manage Orders</Button>
        </Link>
        <Link
          to={`${url}/manageProducts`}
          style={{ textDecoration: 'none', color: '#da1563' }}
        >
          <Button color='inherit'>Manage Products</Button>
        </Link>
        <Link
          to={`${url}/addProduct`}
          style={{ textDecoration: 'none', color: '#da1563' }}
        >
          <Button color='inherit'>Add Product</Button>
        </Link> </>)}

        {user?.email ? (
                  <Box>
                      <Link
            style={{
              textDecoration: 'none',
              color: '#da1563',
              backgroundColor: 'red',
              }}
              to="/"
            >
            <Button onClick={logout} variant='contained' color='error'>
              Logout
            </Button>
          </Link>
          </Box>
        ) : (
          <Link
            style={{
              textDecoration: 'none',
              color: '#da1563',
              backgroundColor: 'red',
            }}
            to='/login'
          >
            <Button variant='contained'>Login</Button>
          </Link>
        )}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: '#9a0594' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'
      >
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/addReview`}>
                <AddReview></AddReview>
            </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProducts></AddProducts>
          </Route>
          <Route path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
