import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class AuthRouter extends Component {
  componentWillMount () {
    const { userState, history, auth } = this.props;
    const isAuthenticated = auth ? (userState.isLogin && userState.actionToken) : true
    this.setState({
      isAuthenticated
    })
    if (!isAuthenticated) {
      history.replace("/login")
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
    type,
    redirect
  } = props;
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
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  component: PropTypes.func,
  type: PropTypes.string,
  redirect: PropTypes.string
}

export default withRouter(connect(mapStateToProps)(AuthRouter));