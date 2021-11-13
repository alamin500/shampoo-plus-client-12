import { Rating, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [value, setValue] = React.useState("2");
  console.log(value)

  const { user } = useAuth();
  const onSubmit = (data) => {
  data.number = value;
    console.log(data)
    fetch("http://localhost:5000/addReview", {

      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
 return (
  <div>
      <h1>Add Review</h1>
     <form onSubmit={handleSubmit(onSubmit)}>

        <TextField
          sx={{padding:'10px'}}
          name="email"
          value={user?.email}
         type="email"
         id="outlined-basic"

         variant="outlined"
          {...register("email", { required: true })}
       />

        <Typography component="legend">Rate Us</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
        <br />
        <TextField
          className="input-field"
          name="comments"

        id="outlined-basic"
         label="Comments"
         variant="outlined"
          {...register("comments", { required: true })}
        />
       <br />
       <br />

        <TextField
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
 )
}

export default AddReview
