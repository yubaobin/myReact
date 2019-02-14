import './index.scss'
import React from 'react';

// export default class Square extends Component {
//   render () {
//     return (
//       <div className="square" onClick={() => this.handleClick()}>{this.props.value}</div>
//     )
//   }
//   handleClick () {
//     this.props.onClick()
//   }
// }

export default function Square (props) {
  return (
    <div className="square" onClick={props.onClick}>{props.value}</div>
  )
}