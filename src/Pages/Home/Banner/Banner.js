import { Button } from '@mui/material'
import React from 'react'
import "./Banner.css"

const Banner = () => {
 return (
  <div className="banner-image d-flex align-items-center justify-content-center">
          <div>
        <h1>LOVE YOUR HAIR</h1>
        <p>TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER</p>
        <p>GET THE LOOK WITH OUR PRODUCT</p>
       <Button variant="outlined" size="large" color="error" sx={{ color: "white"}}>Buy Now</Button>
      </div>
  </div>
 )
}

export default Banner
