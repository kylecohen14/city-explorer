import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather';
import Movies from './Movies';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {},
      map: '',
      errors: '',
      showError: false,
      forcastArr: [],
      moviesArr: []
      // spelled wrong
         // change this false to true
    }
    this.closeError=this.closeError.bind(this);
    this.getLatLong=this.getLatLong.bind(this);
  }

  getLatLong = async (e) => {
    try{
      e.preventDefault();
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      this.setState({location: response.data[0] })

      const MAP = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.location.lat},${this.state.location.lon}&zoom=14`;
      const respond = await axios.get(MAP);
      this.setState({map: respond.config.url})

      // const WEATHER = `http://localhost:3232/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
      const WEATHER = `https://cityexplorerkyle.herokuapp.com/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`;
      const weatherRespond = await axios.get(WEATHER)
      console.log(WEATHER)
      this.setState({forcastArr: weatherRespond.data})

      const MOVIES = `http://localhost:3232/movies?searchQuery=${this.state.searchQuery}`;
      // const MOVIES = `https://cityexplorerkyle.herokuapp.com/movies?searchQuery=${this.state.searchQuery}`;
      const moviesRespond = await axios.get(MOVIES)
      console.log(MOVIES)
      this.setState({moviesArr: moviesRespond.data})
   }  catch(error){
      this.setState({errors: error.response.data.error, showError: true})
    }
  }

  closeError = () => {
    this.setState({showError: false});
  }
  // errorTxt(error){
  //   this.setState({errors: error.response.respond, showError: true})
  // }



  render () {
    return (
      <>
      <h1>City Explorer</h1>
      <Alert show={this.state.showError} variant="warning">
      <Alert.Heading>Error Error</Alert.Heading>
      Error {this.state.errors}: ERROR
      <Button variant="warning" onClick={this.closeError}>Close</Button>
      </Alert>
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
      {this.state.forcastArr.length>0 &&
      <Weather WEATHER={this.state.forcastArr} searchQuery={this.state.searchQuery}/>}
      {this.state.moviesArr.length>0 &&
      <Movies MOVIES={this.state.moviesArr} searchQuery={this.state.searchQuery}/>}
      </>
    )
  }
}
// spelled forecast wrong alot

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
