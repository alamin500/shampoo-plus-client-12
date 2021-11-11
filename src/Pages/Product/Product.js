
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
    <Card sx={{ maxWidth: 345, height:480 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="320"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Typography>$ {price}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>


{user?.email ? (
            <Link to={`/purchase/${_id}`} style={{ textDecoration: 'none', color: '#ff4081' }}>
              <Button variant='contained' color='error'>
                Book {name.toLowerCase()}
              </Button>
            </Link>
          ) : (
            <Link to={`/login/${_id}`} >
              <Button variant='contained' color='error'>
                BOOK {name.toLowerCase()}
              </Button>
            </Link>
          )}
        </CardContent>
      </CardActionArea>
      </Card>
        </Grid>
 )
}

export default Product



// {user?.email ? (
//             <Link to={`/purchase/${_id}`}>
//               <button className="btn m-2 btn-success">
//                 Book {name.toLowerCase()}
//               </button>
//             </Link>
//           ) : (
//             <Link to={`/login/${_id}`}>
//               <button className="btn m-2 btn-success">
//                 BOOK {name.toLowerCase()}
//               </button>
//             </Link>
//           )}