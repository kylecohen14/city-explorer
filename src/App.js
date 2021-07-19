import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {}
    }
  }

  getLatLong = async () => {
const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.searchQuery}&format=json`;
const response = await axios.get(API);
this.setState({location: response.data[0] })
  }

  render () {
    return (
      <>
      <h1>City Explorer</h1>
      <input onChange={(e) => this.setState({searchQuery: e.target.value})}
      placeholder="City name here" type="text" />
      <button onClick={this.getLatLong}>Explore!</button>
      <p>Location name: {this.state.location.display_name}</p>
      <p>Location latitude: {this.state.location.lat}</p>
      <p>Location longitude: {this.state.location.lon}</p>
      </>
    )
  }
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
