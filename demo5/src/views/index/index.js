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
      }],
      stepNumber: 0
    }
  }

  handleClick (i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
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
      history: history,
      stepNumber: this.state.stepNumber + 1
    });
  }

  jumpTo (index) {
    this.setState({
      stepNumber: index
    })
  }

  render () {
    const history = this.state.history[this.state.stepNumber]
    const winner = calculateWinner(history.squares)
    const notFinish = history.squares.some((item) => {
      return !item
    })
    let status = null
    if (winner) {
      status = `${winner}赢了`;
    } else if (!notFinish) {
      status = '平局'
    } else {
      status = `下一个: ${history.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="header"></div>
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

