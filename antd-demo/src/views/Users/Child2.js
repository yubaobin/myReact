import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from '@/store/modules/user/action'

@connect(
  state => ({ loginInfo: state.userState }),
  dispatch => bindActionCreators({ ...userAction }, dispatch)
)
class Child2 extends Component {
  render() {
    const { loginInfo } = this.props
    return (
      <div>
        <p>{ loginInfo.isLoading ?
          'Loading' : (
            loginInfo.msg ? loginInfo.msg : `book:${loginInfo.user.name}`
          ) }
        </p>
        <button onClick={() => this.props.userLogin()}>登陆</button>
      </div>
    )
  }
}

export default Child2