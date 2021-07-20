import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {},
      map: ''
    }
  }

  getLatLong = async (e) => {
    e.preventDefault();
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);
    this.setState({location: response.data[0] })

    const MAP = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.location.lat},${this.state.location.lon}&zoom=14`;
    const respond = await axios.get(MAP);
    this.setState({map: respond.config.url})
  }


  render () {
    return (
      <>
      <h1>City Explorer</h1>
      {/* <input onChange={(e) => this.setState({searchQuery: e.target.value})}
      placeholder="City name here" type="text" />
      <button onClick={this.getLatLong}>Explore!</button>
      <p>Location name: {this.state.location.display_name}</p>
      <p>Location latitude: {this.state.location.lat}</p>
      <p>Location longitude: {this.state.location.lon}</p> */}
      <Form onSubmit={this.getLatLong}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>City Name</Form.Label>
          <Form.Control onChange={(e) => this.setState({searchQuery: e.target.value})} placeholder="Enter city" type="text" />
          <Form.Text className="text-muted">
          Location name: {this.state.location.display_name}<br />
          Location latitude: {this.state.location.lat}<br />
          Location longitude: {this.state.location.lon}<br />
          <Image src={this.state.map} rounded />
          </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
          Explore!
        </Button>
      </Form>
      {/* <img src={this.state.map} alt={'map'}></img> */}
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
