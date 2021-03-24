import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} />
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Board;
