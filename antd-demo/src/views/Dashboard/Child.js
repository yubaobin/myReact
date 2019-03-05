import React, {Component} from 'react'

class Child extends Component {
  render() {
    return (
      <div>
        <p>ChildId: {this.props.match.params.id}</p>
        <button>更新book</button>
      </div>
    )
  }
}

export default Child