import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as bookAction from '@/store/modules/book/action'

class Child extends Component {
  render() {
    return (
      <div>
        <p>ChildId: {this.props.match.params.id}</p>
        <p>book: {this.props.book.name}</p>
        <button onClick={() => this.props.setBook({name: '12345566'})}>更新book</button>
      </div>
    )
  }
}

var mapStateToProps = (state) => {
  return { ...state.bookState }
}

var mapDispatchToProps = (dispatch) => bindActionCreators({ ...bookAction }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Child)