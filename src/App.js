
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Home from './Pages/Home/Home/Home';
// import Services from './Pages/Products/Services';
import Products from './Pages/Products/Products';
import Purchase from './Pages/Purchase/Purchase';
import AddProducts from './Pages/Dashboard/AddProducts/AddProducts';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';

import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Reviews from './Pages/Home/Reviews/Reviews';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navbar/>
          <Switch>
            <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
           <Route path="/purchase/:purchaseId">
            <Purchase></Purchase>
            </Route>

            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>

            <Route path="/addReview">
              <AddReview></AddReview>
            </Route>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route path="/allOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          <Route path="/">
              <Home></Home>
          </Route>
        </Switch>
      </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
