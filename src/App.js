import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Purchase/Purchase';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Reviews from './Pages/Home/Reviews/Reviews';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import Navigation from './Pages/Shared/Navigation/Navigation';
import PrivateRoute from './PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/products'>
              <Products></Products>
            </Route>

            <PrivateRoute path={`/purchase/:purchaseId`}>
              <Purchase></Purchase>
            </PrivateRoute>

            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/myOrders'>
              <MyOrders></MyOrders>
            </Route>
            <Route path='/addReview'>
              <AddReview></AddReview>
            </Route>
            <Route path='/reviews'>
              <Reviews></Reviews>
            </Route>
            <Route path='/allOrders'>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
