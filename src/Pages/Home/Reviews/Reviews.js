import React, { useEffect, useState } from 'react'

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
   useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
   }, []);
 console.log(reviews)
 return (
  <div>
   {
    reviews.map(review => {
     <div>
      <h1>Email{review.email}</h1>
     </div>
    })
    }
  </div>
 )
}

export default Reviews


