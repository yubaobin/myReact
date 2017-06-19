/**
 * Created by yohouakira on 2017/6/6.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BookAction from './ActionCreator';

class BookList extends Component {
  constructor(props) {
    console.log('BookList created');
    super(props);
  }
  handleChange() {
    this.props.saveDraft(this.refs.draft.value);
  }
  loadList () {
    if(this.props.loader.loading) {
      return (
        <div className="loading">正在加载...</div>
      )
    }else {
      return (
        <ul className="book-list">
          {this.props.loader.bookList.map((book, index) => {
            return <li key={index}>{book}
              <span className="close" onClick={ () => {this.props.deleteBook(index)} }>x</span>
            </li>
          })}
        </ul>
      )
    }
  }
  render() {
    const { draft, addBook, asyncLoad } = this.props;
    return (
      <div className="book-view">
        <div className="view-header">
          <input ref="draft" placeholder="输入书名" onChange={this.handleChange.bind(this)}  />
          <button onClick={() => { addBook(draft) }}>添加</button>
          <button onClick={asyncLoad}>异步加载</button>
        </div>
        { this.loadList() }
      </div>
     )
  }
}

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    draft: state.draft,
    loader: state.loader,
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(BookAction, dispatch);
  // return {
  //   addBook: () => dispatch({ type: ActionType.ADD_BOOK })
  // }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);

