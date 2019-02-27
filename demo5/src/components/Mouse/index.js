import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './index.scss'
class Mouse extends Component {
  constructor() {
    super();
    this.divRef = null
    this.state = {
      x: null,
      y: null
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.getRef = this.getRef.bind(this);
  }
  handleMouseMove (e) {
    const top = this.divRef.getBoundingClientRect().top
    const left = this.divRef.getBoundingClientRect().left
    this.setState({
      x: e.clientX - left,
      y: e.clientY - top
    })
  }
  getRef (ref) {
    this.props.divRef(ref)
    this.divRef = ref
  }
  render() {
    const { width, height } = this.props
    return (
      <div style={{ width, height }} ref={this.getRef} onMouseMove={this.handleMouseMove}>
        { this.props.children(this.state) }
      </div>
    )
  }
}

Mouse.propTypes = {
  children: PropTypes.func.isRequired,
  divRef: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
}

Mouse.defaultProps = {
  divRef: () => {},
  width: 100,
  height: 100
}
export default Mouse