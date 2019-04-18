import React, {Component} from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox } from 'pantui'
import './Login.less'

@connect(
  ({ login, loading }) => ({
    status: login.status,
    loginLoading: loading.effects['login/login']
  })
)
class Login extends Component {
  state = {
    loginResult: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, values) => {
      if(!err) {
        console.log(values)
        dispatch({
          type: 'login/login',
          payload: values
        })
      }
    })
    return false;
  }
  render () {
    const { loginResult } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username')(
                <Input prefix={<Icon type="user" />} />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password')(
                <Input prefix={<Icon type="lock" />} />
              )}
            </Form.Item>
            <p>{ this.props.loginLoading ? 'loading' : `${loginResult}` }</p>
            <Form.Item><Button htmlType="submit">登录</Button></Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create({})(Login)