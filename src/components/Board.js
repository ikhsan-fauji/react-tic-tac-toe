import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Board;
