import React, {Component} from 'react'
import { aircleApi } from '@/api'
class Child extends Component {
  state = {
    aircle: {}
  }
  constructor() {
    super();
    this.update = this.update.bind(this);
  }
  update() {
    const me = this
    aircleApi({ id: 1 }).then(res => {
      me.setState({
        aircle: res.data
      })
    })
  }
  render() {
    const { aircle } = this.state
    return (
      <div>
        <p>ChildId: {this.props.match.params.id}</p>
        <button onClick={this.update}>更新book</button>
        { aircle.name }
      </div>
    )
  }
}

export default Child