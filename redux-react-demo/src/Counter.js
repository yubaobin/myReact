/**
 * Created by yohouakira on 2017/6/2.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    const { length } = this.props;
    return (
      <div className="counter-view">
        <div className="counter">
          <span>总数: </span>
          <span>{length}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    length: state.loader.bookList.length,
  }
}

export default connect(mapStateToProps)(Counter);
