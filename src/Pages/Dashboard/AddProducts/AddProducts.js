import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
// import useFirebase from "../../../hooks/useFirebase";

const AddProducts = () => {
 const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const { setdate } = useState();
  const onSubmit = (data) => {
    alert("Added Successfully");
    data.email = user?.email;
    fetch("http://localhost:5000/addShampoo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setdate(result));
  };
 return (
  <div>
      <h1 className="m-3">Add New Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
       <TextField
       sx={{ width: '30%', m: 1 }}
          {...register("name", { required: true })}
          placeholder="Name"
         className="p-2 m-2 w-25"
         id="outlined-basic" variant="outlined"
        />
       <br />

       <TextField
       sx={{ width: '30%', m: 1 }}
          {...register("description")}
          placeholder="Description"
         className="p-2 m-2 w-25"
         id="outlined-basic" variant="outlined"
        />
        <br />
       <TextField
         sx={{ width: '30%', m: 1 }}
          type="price"
          {...register("price")}
          placeholder="Price"
         className="p-2 m-2 w-25"
         id="outlined-basic" variant="outlined"
        />
        <br />
       <TextField
       sx={{ width: '30%', m: 1 }}
          {...register("img")}
          placeholder="Image"
         className="p-2 m-2 w-25"
         id="outlined-basic" variant="outlined"
        />
        <br />
       <TextField
         sx={{ width: '30%', m: 1 }} type="submit" className="p-2 m-2 w-25" id="outlined-basic" variant="outlined" />
      </form>
    </div>
 )
}

export default AddProducts
