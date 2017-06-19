/**
 * Created by yohouakira on 2017/6/13.
 */
import React, { Component } from 'react';
import './react-router-redux.css';
import * as ActionCreator from '../ActionCreator';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreator, dispatch);
}

class Index extends Component {
  render() {
    const { history, bookList, deleteB } = this.props;
    return (
      <div className="book-list">
        <div className="fix">
          <span>BookList</span>
          <button className="btn btn-primary btn-small pull-right" onClick={() => {history.push('/add')} } >
            <span>添加</span>
          </button>
        </div>
        <ul className="list">
          {
            bookList.map((book, i) => {
              return (
                <li key={i}>
                  <span>{book}</span>
                  <div className="cover">
                    <div className="btn-group">
                      <button><span>查看</span></button>
                      <button onClick={ () => { deleteB(i) } }><span>删除</span></button>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const IndexView = connect(mapStateToProps, mapDispatchToProps)(Index);

class addBook extends Component {
  addBook() {
    const { addBook, history } = this.props;
    addBook(this.newBook.value);
    history.push('/');
  }
  render() {
    return (
       <div className="add-book">
         <div className="mb-20"><input ref={(input) => { this.newBook = input; }} /></div>
         <button className="btn btn-primary btn-small" onClick={this.addBook.bind(this)}>添加</button>
       </div>
    )
  }
}

const AddBookView = connect(mapStateToProps, mapDispatchToProps)(addBook);

class ReactRouterReduxView extends Component {

  render() {
    return (
      <BrowserRouter basename='/ReactRouterRedux'>
        <div className="my-router-view">
          <Route exact path="/" component={IndexView}/>
          <Route path="/add" component={AddBookView}/>
        </div>
      </BrowserRouter>
    )
  }
}


export default ReactRouterReduxView;

