import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Banner.css"

const Banner = () => {
 return (
  <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}} className="banner-image">
          <div>
        <h1>EAT FRESH, STAY HEALTHY</h1>
        <p>TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER</p>
       <Link to="/products" style={{ textDecoration: 'none' }}>
       <Button variant="outlined" size="large" color="error" sx={{ color: "white"}}>Buy Now</Button>
       </Link>
      </div>
  </Box>
 )
}

export default Banner
