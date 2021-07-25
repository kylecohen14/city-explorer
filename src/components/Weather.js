import React from 'react';
import SingleDayWeather from './SingleDayWeather.js';


class Weather extends React.Component {
  render(){
    return(
      <div className='weather-forecast'>
        {this.props.weather.map( (value, idx) => {
          return <SingleDayWeather key={idx} weather={value} />
        })}
      </div>
    )
  }
}
  export default Weather;
