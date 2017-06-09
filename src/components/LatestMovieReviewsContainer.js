import React, { Component } from 'react';
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = '33d894752f274a9e89a78b49669d8577';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }

  componentWillMount(){
    fetch(URL).then(result => result.json()).then(review => this.setState({ reviews: review.results }))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
