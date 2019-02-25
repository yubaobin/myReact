import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './LayoutWrapper.less';
import classnames from 'classnames'

class LayoutWrapper extends Component {
  render () {
    const { fullHeight, styles, children } = this.props
    const classes = classnames({
      'layout-wrapper': true,
      'layout-wrapper-full': fullHeight
    })
    React.Children.map(children, child => {
    })
    return (
      <div className={classes} style={styles}>{children}</div>
    )
  }
}

LayoutWrapper.propsType = {
  fullHeight: PropTypes.bool,
  style: React.CSSProperties
}
LayoutWrapper.defaultProps = {
  fullHeight: false,
  style: { }
}

export default LayoutWrapper