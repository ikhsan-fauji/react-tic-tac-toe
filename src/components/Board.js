import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  _handleClick(index) {
    const squares = this.state.squares.slice();
    squares[index] = 'X';
    this.setState({ squares });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this._handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default Board;
