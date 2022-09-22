import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [control, setConrol] = useState(false);
  const [deletes, setDelete] = useState(false);
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
          alert('Ordering Deleted');
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
  };
  const deleteConfirm = (id) => {
    let clicked = window.confirm('click to delete');
    if (clicked == true) {
      setDelete(true);
      handleDelete(id);
    } else {
      setDelete(false);
    }
  };
  let count = orders.filter((order, index) => order.email === user.email);
  console.log(count);
  return (
    <Container>
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
          <h1>My orders: {count.length}</h1>
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
                {orders.map(
                  (order, index) =>
                    order.email === user.email && (
                      <TableRow
                        key={order._id}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component='th' scope='row'>
                          {order.name}
                        </TableCell>
                        <TableCell align='right'>{order.description}</TableCell>
                        <TableCell align='right'>{order.price}</TableCell>
                        <TableCell align='right'>
                          <button
                            className='btn btn-danger '
                            onClick={() => deleteConfirm(order._id)}
                          >
                            Cancel Order
                          </button>
                        </TableCell>
                      </TableRow>
                    )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Container>
  );
};

export default MyOrders;
