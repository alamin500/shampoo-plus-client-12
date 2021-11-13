import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const { setdate } = useState();
  const onSubmit = (data) => {
    alert('Added Successfully');
    data.email = user?.email;
    fetch('https://thawing-eyrie-17375.herokuapp.com/addShampoo', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setdate(result));
  };
  return (
    <div>
      <h1 className='m-3'>Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{ width: '30%', m: 1 }}
          {...register('name', { required: true })}
          placeholder='Name'
          id='outlined-basic'
          variant='outlined'
        />
        <br />

        <TextField
          sx={{ width: '30%', m: 1 }}
          {...register('description')}
          placeholder='Description'
          id='outlined-basic'
          variant='outlined'
        />
        <br />
        <TextField
          sx={{ width: '30%', m: 1 }}
          type='price'
          {...register('price')}
          placeholder='Price'
          id='outlined-basic'
          variant='outlined'
        />
        <br />
        <TextField
          sx={{ width: '30%', m: 1 }}
          {...register('img')}
          placeholder='Image'
          id='outlined-basic'
          variant='outlined'
        />
        <br />
        <TextField
          sx={{ width: '30%', m: 1 }}
          id='filled-basic'
          variant='filled'
          type='submit'
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProducts;
