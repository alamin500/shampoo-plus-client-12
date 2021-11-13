import { TextField } from '@mui/material';
import React from 'react'
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const MakeAdmin = () => {

 const { register, handleSubmit} = useForm();

  const onSubmit = (data) => {
   alert("Admin made Successfully!!");
    fetch("http://localhost:5000/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
 return (
  <div>
   <div>
      <h1>Make Admin</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
         <TextField
           sx={{width: '30%',
              m: 1,}}
           id="outlined-basic"
           variant="outlined"
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
         <TextField
           sx={{width: '30%',
              m: 1,}}
          className="submit-btn btn btn-danger mt-3"
          type="submit"
           value="Make as Admin"
           id="filled-basic"
           variant="filled"
        />
      </form>
    </div>
  </div>
 )
}

export default MakeAdmin
