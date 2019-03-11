import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import * as userAction from '@/store/user/action'
import './Login.less'

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
      <div className="login-wrapper">
        <div className="login-container">

        </div>
      </div>
    )
  }
}

export default Login