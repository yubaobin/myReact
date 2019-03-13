/**
 * 权限的路由，主要根据redux保存的用户信息判断是否有权限
 */
import React, { Component } from 'react';
import { Route, Redirect } from 'dva/router';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import config from '@/config'

const TOKEN = config.accessToken

class AuthRouter extends Component {
  componentWillMount () {
    const { history, location, auth, onFailAuth } = this.props;
    const isAuthenticated = auth
    this.setState({
      isAuthenticated
    })
    if (!isAuthenticated) {
      onFailAuth && onFailAuth(history, location)
    }
  }
  render () {
    const { auth = false } = this.props;
    if (auth) {
      return this.state.isAuthenticated ? (
        <RouteItem { ...this.props } />
      ) : null
    } else {
      return (<RouteItem { ...this.props } />)
    }
  }
}

const RouteItem = (props) => {
  const {
    component: RendComponent,
    path = '/',
    exact = false,
    strict = false,
    routes = [],
    type = '200',
    redirect,
    title = ''
  } = props;
  if (title) document.title = title
  if (type === '404') {
    return (<Route component={RendComponent} />)
  } else if (redirect) {
    return (<Redirect exact={exact} from={path} to={redirect} />)
  } else {
    return (<Route
      path={path}
      exact={exact}
      strict={strict}
      render={props => (
        <RendComponent {...props} routes={routes}/>
      )}
    />)
  }
}

const mapStateToProps = (state) => {
  return {
    userState: state.userState
  }
}

AuthRouter.propTypes  ={
  path: PropTypes.string,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  component: PropTypes.func,
  type: PropTypes.string,
  redirect: PropTypes.string,
  title: PropTypes.string,
  onFailAuth: PropTypes.func
}

export default connect(mapStateToProps)(AuthRouter);