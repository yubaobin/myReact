import React, { Component } from 'react';
import { Button } from 'antd';
import { Transfer, Switch } from 'antd';
import logo from './assets/logo.svg';
import './App.less';
import NProgress from 'nprogress'

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    disabled: i % 3 < 1,
  });
}
const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);
class App extends Component {
  constructor () {
    super()
    this.state = {
      targetKeys: oriTargetKeys
    }
  }
  componentWillMount () {
    NProgress.start();
  }
  componentDidMount () {
    NProgress.done();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-link">
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button type="primary" >按钮</Button>
        </header>
        <Transfer
          dataSource={mockData}
          titles={['Source', 'Target']}
          targetKeys={this.targetKeys}
          render={item => item.title} />
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={false}
          style={{ marginTop: 16 }}/>
      </div>
    );
  }
}

export default App;
