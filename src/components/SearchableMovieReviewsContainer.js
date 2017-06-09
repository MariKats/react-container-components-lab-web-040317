import React, {Component} from 'react';
import MovieReviews from './MovieReviews'

const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${API}` + `?query=`
const API = "33d894752f274a9e89a78b49669d8577"

export default class LatestMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleChange(event){
    this.setState({
      searchTerm: event.target.value
    })
  }

  componentWillMount(){
    fetch(URL).then(result => result.json()).then(review => this.setState({ reviews: review.results }))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
        <input type="text" onChange={this.handleChange}/>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
