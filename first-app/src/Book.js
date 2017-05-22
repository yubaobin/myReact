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
    return <div>
             <h1 onClick={this.toApp.bind(this)}>真首页</h1>
             <h1><Link to="/book" activeClassName="active" onlyActiveOnIndex={ true }>首页onlyActiveOnIndex</Link></h1>
             <h1><IndexLink to="/book" activeClassName="active" >首页IndexLink</IndexLink></h1>
             <ul>{
               this.props.bookList.map((item, index) =>
                 <Link to={ '/detail/'+item.id } key={index} activeClassName="active">{item.name}</Link>)
            }</ul>
           <div className="detail">
             { this.props.children }
           </div>
           </div>
  }
}
Book.defaultProps = {
  bookList: [{
    id: 1,
    name: '思考人生'
  }, {
    id: 2,
    name: '思考人生-exrend'
  }],
}
export default Book;