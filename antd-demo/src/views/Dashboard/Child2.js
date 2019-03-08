import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from '@/store/user/action'

@connect(
  state => ({ userState: state.userState  }),
  dispatch => bindActionCreators({ ...userAction }, dispatch)
)
class Child2 extends Component {
  render() {
    const { userState } = this.props
    return (
      <div>
        <p>{ userState.loginLoad ?
          'Loading' : `userInfo: ${userState.userInfo.id}`
          }
        </p>
      </div>
    )
  }
}

export default Child2