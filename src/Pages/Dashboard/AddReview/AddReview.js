import { Rating, Typography } from '@mui/material';
import React from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
  const [value, setValue] = React.useState("2");
  console.log(value)
  const { register, handleSubmit, watch, errors } = useForm();
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
      <h1>Review</h1>
     <form onSubmit={handleSubmit(onSubmit)}>

        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
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
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
 )
}

export default AddReview
