import './index.scss';
import React, { Component } from 'react';

import Board from 'views/Board'
export default class App extends Component {
  constructor () {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        xIsNext: true
      }]
    }
  }

  handleClick (i) {
    const history = this.state.history.slice();
    const historyItem = history[history.length - 1]
    const arr = historyItem.squares.slice();
    if (calculateWinner(arr) || arr[i]) {
      return ;
    }
    arr[i] = historyItem.xIsNext ? 'X' : 'O';
    history.push({
      squares: arr,
      xIsNext: !historyItem.xIsNext
    })
    this.setState({
      history: history
    });
  }

  jumpTo (index) {
    const history = this.state.history.slice();
    history.splice(index + 1)
    this.setState({
      history: history
    })
  }

  render () {
    const history = this.state.history[this.state.history.length - 1]
    const winner = calculateWinner(history.squares)
    let status = null
    if (winner) {
      status = `${winner}赢了`;
    } else {
      status = `下一个: ${history.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={history.squares} onClick={(i) => this.handleClick(i)} />
          <div className="game-result">{status}</div>
        </div>
        <div className="game-info">
          <div>历史记录:</div>
          <ul className="history-list">
            {
              this.state.history.map((item, index) => {
                return (
                  <li key={index} onClick={() => this.jumpTo(index)}>{index ? `# step ${index}` : '重新开始'}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

/**
 * 判断输赢
 */
function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

