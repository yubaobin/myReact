import React, { Component } from 'react';
import Author from './Author';
import PropTypes from 'prop-types';
import './Detail.css';

class Detail extends Component {
  constructor(props) {
    console.log('Detail created');
    super(props);
  }
  getChildContext() {
    return {color: "purple"};
  }
  render() {
    return <div> {this.props.params.id%2 === 0? '这是本书': '这是读后感'}
             <Author />
           </div>
  }
}
Detail.childContextTypes = {
  color: PropTypes.string
}
export default Detail;


