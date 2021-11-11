import { ViewAgenda } from '@mui/icons-material';
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
  console.log(reviews);
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}

      >
        {reviews.map((review) => (
          <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color='text.secondary'
                  gutterBottom
                >
                  Word of the Day
                </Typography>

                <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                  adjective
                </Typography>
                <Typography variant='body2'>
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
