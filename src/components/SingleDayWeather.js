import React from 'react';
class SingleDayWeather extends React.Component {
  render () {
    return (
      <div className='daily-forecast'>
        <h2>{this.props.weather.datetime}</h2>
        <p>{this.props.weather.temp}</p>
        <p>{this.props.weather.description}</p>
      </div>
    )
  }
}
export default SingleDayWeather;
