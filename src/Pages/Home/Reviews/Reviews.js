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
    <div>
      <h1>This is Review</h1>
      {reviews.map((review) => {
        <div>
          <h1>Email {review.email}</h1>
          <p>Commente {review.comments}</p>
        </div>;
      })}
    </div>
  );
};

export default Reviews;
