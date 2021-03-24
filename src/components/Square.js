import React, { Component } from 'react';

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => alert('On Click')}>
        { this.props.value }
      </button>
    );
  }
}

export default Square;
