import React from 'react';
import SingleMovie from './SingleMovie.js';
class Movies extends React.Component {
  render() {
    return (
    <div className='movies'>
      {this.props.movies.length && this.props.movies.map((movies, idx) => {
        return <SingleMovie key={idx} movies={movies} />
      })}
    </div>
    )
  }
}
export default Movies;
