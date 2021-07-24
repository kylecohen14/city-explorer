import React from 'react';
import Card from 'react-bootstrap/Card';


class Movies extends React.Component {
  render(){
    return(
      <div>
        {this.props.MOVIES.map((value, idx) =>
        <Card key={idx} style={{ width: '18rem' }}>
          <Card.Text>Title: {value.title}, Overview: {value.overView}, Avg Votes: {value.averageVotes}, Total Votes: {value.totalVotes}</Card.Text>
          <img src={value.poster} alt='poster' />
          <Card.Text>Popularity: {value.popularity}, Date released on: {value.date}</Card.Text>
        </Card>
        )}
        </div>
    )
  }
}
  export default Movies;