import React, {Component} from 'react'
import { Route } from 'react-router-dom'
class SubRoutes extends Component {
  render () {
    const route = this.props
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    )
  }
}
export default SubRoutes;