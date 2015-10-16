var $ = require('jquery'),
    React = require('react'),
    ReactDOM = require('react-dom'),
    ReactModule = require('./ReactModule');

class Fabrique extends React.Component {
  render() {
    return (
      <div>
        {this.props.children} 
      </div>
    );
  }
}

export default Fabrique;