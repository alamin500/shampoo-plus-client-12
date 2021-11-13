import { Rating, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [value, setValue] = React.useState("2");

  const { user } = useAuth();
  const onSubmit = (data) => {
    alert("Your review successfully added. Thanks!!");
  data.number = value;
    fetch("https://thawing-eyrie-17375.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
 return (
  <div>
      <h1>Add Review</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          sx={{width: '30%',
              m: 1,}}
          name="email"
          value={user?.email}
         type="email"
         id="outlined-basic"
         variant="outlined"
          {...register("email", { required: true })}
       />
        <br />
       <TextField
        sx={{width: '30%',
              m: 1,}}
          className="input-field"
          name="comments"
        id="outlined-basic"
         label="Comments"
         variant="outlined"
          {...register("comments", { required: true })}
        />
       <br />
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
         id="filled-basic"
         variant="filled"
         sx={{width: '30%',
              m: 1,}}
          className="submit-btn"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
 )
}

export default AddReview
