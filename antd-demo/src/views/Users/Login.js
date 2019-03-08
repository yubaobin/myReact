import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from '@/store/user/action'

@connect(
  '',
  dispatch => bindActionCreators({ ...userAction }, dispatch)
)
class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
  }
  login() {
    this.props.userLogin({
      username: 'test', password: 'test'
    })
  }
  render () {
    return (
      <div>
        <p>登陆222</p>
        <button onClick={this.login}>登陆</button>
      </div>
    )
  }
}

export default Login