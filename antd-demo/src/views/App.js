import React, {Component} from 'react';
import BasicLayout from '@/layout/BasicLayout'
import './App.less'
export default class App extends Component {
  render () {
    return (
      <div className="container"><BasicLayout></BasicLayout></div>
    )
  }
}