import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Grid } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { user } = useAuth();
  const { name, description, price, img, _id } = product;
  return (
    <Grid item xs={4} sm={4} md={4}>
      <Card  sx={{ maxWidth: 345, height: {
      sx: 1.0, // 100%
      sm: 520,
      md: 520,
    }  }}>
        <CardActionArea sx={{ paddingTop: '10px' }}>
          <CardMedia
            component='img'
            height='305'
            image={img}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {name}
            </Typography>
            <Typography sx={{ fontWeight: '600' }}>$ {price}</Typography>
            <Typography
              sx={{ marginBottom: '10px' }}
              variant='body2'
              color='text.secondary'
            >
              {description}
            </Typography>
            {user?.email ? (
              <Link to={`/purchase/${_id}`} style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  color='error'
                  sx={{
                    backgroundColor: '#da1563',
                    marginTop: '5px',
                  }}
                >
                  Buy Now
                </Button>
              </Link>
            ) : (
              <Link to={`/login/${_id}`} style={{ textDecoration: 'none' }}>
                <Button
                  variant='contained'
                  color='error'
                  sx={{
                    backgroundColor: '#da1563',
                  }}
                >
                  Buy Now
                </Button>
              </Link>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Product;
