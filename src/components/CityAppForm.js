import React from 'react';
import '/mnt/c/Users/kylec/projects/codefellows/code301/lab_assignments/city-explorer/src/App.css';

class CityAppForm extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.handleLocation}>
        <input type='text' placeholder='enter city' onChange={this.props.onChange} />
        <input type='submit' />
      </form>
    )
  }
}

export default CityAppForm;