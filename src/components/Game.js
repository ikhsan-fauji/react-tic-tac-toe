import React, { Component } from 'react';
import { calculateWinner } from '../helpers/GameHelper';
import Board from './Board';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  _turn() {
    return this.state.xIsNext ? 'X' : 'O';
  }


  _handleClick(index) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[index]) return;

    squares[index] = this._turn();
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  _jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  _moves(history) {
    return history.map((step, move) => {
      const desc = move ? `Go to move ${move}` : 'Go to game start';
      return (
        <li>
          <button onClick={() => this._jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winer = calculateWinner(current.squares);
    const moves = this._moves(history);

    let status = 'Next player: ' + this._turn();
    if (winer) status = 'Winer: ' + winer;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this._handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
