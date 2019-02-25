import React, { Component } from 'react';
import LayoutWrapper from '@/layout/LayoutWrapper'
import LayoutSide from '@/layout/LayoutSide'
import './BasicLayout.less'
class BasicLayout extends Component {
  constructor () {
    super()
    this.state = {
    }
  }
  render() {
    return (
      <LayoutWrapper fullHeight={true}>
        <LayoutSide className="layout-sider">Sider</LayoutSide>
        <LayoutWrapper>
          <div className="layout-header">Header</div>
          <div className="layout-body">Content</div>
        </LayoutWrapper>
      </LayoutWrapper>
    );
  }
}

export default BasicLayout;
