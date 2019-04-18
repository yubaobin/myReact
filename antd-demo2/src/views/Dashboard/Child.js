import React, {Component} from 'react'
import { ButtonPlus } from 'pantui'
class Child extends Component {
  render() {
    return (
      <div>
        <p>ChildId1</p>
        <ButtonPlus type="del">删除</ButtonPlus>
      </div>
    )
  }
}

export default Child