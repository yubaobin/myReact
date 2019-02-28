import React, {Component, Fragment} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
class Nav extends Component{
  constructor() {
    super()
    this.gotoChild = this.gotoChild.bind(this)
  }
  gotoChild () {
    this.props.history.push('/register/child/113')
  }
  render () {
    return (
      <Fragment>
        <button key={1} onClick={this.gotoChild}>Child1</button>
        <NavLink key={2} to="/register/child2">Child2</NavLink>
      </Fragment>
    )
  }
}

export default withRouter(Nav)