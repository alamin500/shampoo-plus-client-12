import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Email } from '@mui/icons-material';
const ManageAllOrders = () => {
  const [number, setNumber] = React.useState('');
  const [orderId, setOrderId] = React.useState('');
  const handleChange = (event) => {
    setNumber(event.target.value);
    fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(event.target),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  const handleOrderId = (id) => {
    setOrderId(id);
  };
  const [orders, setOrders] = useState([]);
  const [control, setConrol] = useState(false);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/allOrders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/deleteOrder/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert('Booking Deleted');
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
  };
  const deleteConfirm = (id) => {
    let clicked = window.confirm('click to delete');
    if (clicked == true) {
      handleDelete(id);
    } else {
    }
  };
  return (
    <div className='container mt-5'>
      {orders.length === 0 ? (
        <button variant='primary' disabled>
          <spinner
            as='span'
            animation='grow'
            size='sm'
            role='status'
            aria-hidden='true'
          />
          Loading...
        </button>
      ) : (
        <>
            <h1>All Orders: {orders.length}</h1>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label='Appointments table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='right'>Description</TableCell>
                  <TableCell align='right'>Price</TableCell>
                  <TableCell align='right'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow
                    key={order._id}
                    sx={{
                      '&:last-child td, &:last-child th': { border: 0 },
                    }}
                  >
                    <TableCell component='th' scope='row'>
                      {order?.name}
                    </TableCell>
                    <TableCell align='right'>{order.description}</TableCell>
                    <TableCell align='right'>{order.price}</TableCell>
                    <TableCell align='right'>
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id='demo-simple-select-label'>
                            {order?.status?.value === 10 && 'pending'}
                            {order?.status?.value === 20 && 'shipped'}
                            {order?.status?.value === 30 && 'confirm'}
                            {!order?.status?.value && 'pending'}
                          </InputLabel>
                          <Select
                            labelId='demo-simple-select-label'
                            id='demo-simple-select'
                            value={order?.status?.value}
                            onChange={handleChange}
                            onClick={() => handleOrderId(order?._id)}
                          >
                            <MenuItem value={10}>Pending</MenuItem>
                            <MenuItem value={20}>Shipped</MenuItem>
                            <MenuItem value={30}>Confirm</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </TableCell>
                    <TableCell align='right'>
                      <button
                        className='btn btn-danger '
                        onClick={() => deleteConfirm(order._id)}
                      >
                        Cancel Order
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ManageAllOrders;
