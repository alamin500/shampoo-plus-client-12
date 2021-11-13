import Rating from '@mui/material/Rating';
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container>
      <Typography
        sx={{ margin: '20px', paddingTop: '20px' }}
        variant='h4'
        gutterBottom
        component='div'
      >
        REVIEWS
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {reviews.map((review) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  {review.email}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color='text.secondary'
                ></Typography>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Typography component='legend'>Rating</Typography>
                  <Rating name='read-only' value={review.number} readOnly />
                </Box>
                <Typography variant='body2'>{review.comments}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
