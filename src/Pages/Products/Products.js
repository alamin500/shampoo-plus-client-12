import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
const Products = (props) => {
  const { home = false } = props;
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 500,fontSize: '32px', m: 2, color: 'success.main' }}
          variant='h6'
          component='div'
        >
          OUR PRODUCTS
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((product, i) =>
            home ? (
              i < 6 && <Product key={product.id} product={product}></Product>
            ) : (
              <Product key={product.id} product={product}></Product>
            )
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Products;
