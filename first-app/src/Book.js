import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import './Book.css';

class Book extends Component {
  constructor(props) {
    console.log('book created');
    super(props)
  }
  componentDidMount() {
    this.props.router.setRouteLeaveHook(
      this.props.route,
      this.routerWillLeave
    );
  }
  routerWillLeave(nextLocation) {
    console.log(nextLocation);
    return "真的离开"
  }
  toApp() {
    this.props.router.push('/');
  }
  render() {
    return (
          <div className="book-view">
             <div className="back" onClick={this.toApp.bind(this)}>返回首页</div>
             <div>下面是book页面的tab页</div>
             <div>使用this.props.children得到</div>
             <div>(默认tab页使用IndexRoute标签定义组件)</div>
             <div className="book-tab">
               <div>
                 <Link to="/book" activeClassName="active" onlyActiveOnIndex={ true }>
                   默认tab页(使用onlyActiveOnIndex属性高亮)
                 </Link>
               </div>
               <div>
                 <IndexLink to="/book" activeClassName="active" >
                   默认tab页(使用IndexLink标签高亮)
                 </IndexLink>
               </div>
               <ul className="book-list">{
               this.props.bookList.map((item, index) =>
                 <li key={index}>
                   <Link to={ '/detail/'+item.id } activeClassName="active">{item.name}</Link>
                 </li>)
               }</ul>
              <div className="detail">
              { this.props.children }
              </div>
             </div>
          </div>
        )
  }
}
Book.defaultProps = {
  bookList: [{
    id: 1,
    name: '书本1'
  }, {
    id: 2,
    name: '书本2'
  }],
}
export default Book;