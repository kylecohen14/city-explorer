import React from 'react';

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