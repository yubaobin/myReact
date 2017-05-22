import React, { Component } from 'react';
import Author from './Author';
import PropTypes from 'prop-types';
import './Detail.css';

class Detail extends Component {
  constructor(props) {
    console.log('Detail created');
    super(props);
    this.state = {
      color: '#FFF',
    }
  }
  getChildContext() {
    return { color: this.state.color };
  }
  changeColor(e) {
    this.setState({color: e.target.value});
  }
  render() {
    return <div> {this.props.params.id%2 === 0? '这是本书': '这是读后感'}
             <select onChange={this.changeColor.bind(this)}>{
               this.props.colors.map((item) => {
                 return <option key={item.value} value={item.value}>{item.name}</option>
               })
             }
             </select>
             <Author />
           </div>
  }
}
Detail.childContextTypes = {
  color: PropTypes.string
}

Detail.defaultProps = {
  colors: [
    { name: '白色', value: '#FFF' },
    { name: '黑色', value: '#000' },
    { name: '蓝色', value: '#2e84fb' },
    { name: '红色', value: '#e42e42' }],
}
export default Detail;


