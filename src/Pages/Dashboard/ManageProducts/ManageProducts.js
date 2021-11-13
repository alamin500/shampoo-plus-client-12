import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [control, setConrol] = useState(false);
  useEffect(() => {
    fetch('https://thawing-eyrie-17375.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [control]);
  const handleDelete = (id) => {
    fetch(`https://thawing-eyrie-17375.herokuapp.com/deleteProducts/${id}`, {
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
      {products.length === 0 ? (
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
            <h1>All products: {products.length}</h1>
          <TableContainer component={Paper}>
            <Table sx={{}} aria-label='Appointments table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align='right'>Time</TableCell>
                  <TableCell align='right'>Service</TableCell>
                  <TableCell align='right'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow
                    key={product._id}
                    sx={{
                      '&:last-child td, &:last-child th': { bproduct: 0 },
                    }}
                  >
                    <TableCell component='th' scope='row'>
                      {product.name}
                    </TableCell>
                    <TableCell align='right'>{product.description}</TableCell>
                    <TableCell align='right'>{product.price}</TableCell>
                    <TableCell align='right'>
                      <button
                        className='btn btn-danger '
                        onClick={() => deleteConfirm(product._id)}
                      >
                        Delete
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

export default ManageProducts;
