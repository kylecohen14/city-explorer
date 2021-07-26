import React from 'react';


class SingleMovie extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.movies.title}</h1>
        <p>Released on: {this.props.movies.date}</p>
        <p>Popularity: {this.props.movies.popularity}</p>
        <img src={this.props.movies.poster} alt='poster' />
        <p>Overview: {this.props.movies.overview}</p>
        <p>Total Votes: {this.props.movies.totalVotes}</p>
        <p>{this.props.movies.averageVotes}</p>
        </div>
    )
  }
}
  export default SingleMovie;
  