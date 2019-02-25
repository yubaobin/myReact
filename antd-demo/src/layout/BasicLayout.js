import React, { Component } from 'react';
import LayoutWrapper from '@/layout/LayoutWrapper'
import LayoutSide from '@/layout/LayoutSide'
import './BasicLayout.less'
import TempInput from '@/components/TempInput'
class BasicLayout extends Component {
  constructor (props) {
    super (props)
    this.state = {
      sLetter: '',
      bLetter: ''
    }
    this.onSLetterChange = this.onSLetterChange.bind(this)
    this.onBLetterChange = this.onBLetterChange.bind(this)
  }
  onSLetterChange (value) {
    this.setState({
      sLetter: value.toLowerCase(),
      bLetter: value.toUpperCase()
    })
  }
  onBLetterChange (value) {
    this.setState({
      sLetter: value.toLowerCase(),
      bLetter: value.toUpperCase()
    })
  }
  render() {
    return (
      <LayoutWrapper fullHeight={true}>
        <LayoutSide className="layout-sider">Sider</LayoutSide>
        <LayoutWrapper>
          <div className="layout-header" onClick={this.handleClick}>Header</div>
          <div className="layout-body">Content</div>
          <TempInput type="s" changeLetter={this.state.sLetter} onInputChange={this.onSLetterChange}/>
          <TempInput type="b" changeLetter={this.state.bLetter} onInputChange={this.onBLetterChange}/>
        </LayoutWrapper>
      </LayoutWrapper>
    );
  }
}

export default BasicLayout;
