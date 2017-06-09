import React from 'react';

const Review = ({ display_title }) => {
  return(
    <div className="review">
      <h3>{display_title}</h3>
    </div>
  )
}

const MovieReviews = ({ reviews }) => {
  return(
     <div className="review-list">
       {reviews.map(Review)}
     </div>
   )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
