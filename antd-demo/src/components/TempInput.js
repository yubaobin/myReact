import React, {Component} from 'react';
import PropTypes from 'prop-types'
const names = {
 's': '小写', 'b': '大写'
}

class TempInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    this.props.onInputChange(e.target.value)
  }
  render () {
    const { type = 's', changeLetter } = this.props
    return (
      <div>{names[type]}: <input value={changeLetter} onChange={this.handleChange}/></div>
    )
  }
}

TempInput.propTypes = {
  changeLetter: PropTypes.string
}

export default TempInput