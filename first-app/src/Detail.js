import React, { Component } from 'react';
import './Detail.css';

class Detail extends Component {
  constructor(props) {
    console.log('Detail created');
    super(props);
  }
  render() {
    return <ul> {
        this.props.params.id%2 === 0? '这是本书': '这是读后感'
    }</ul>
  }
}

export default Detail;


