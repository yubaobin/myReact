//组件
var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment" >
				<span className="time">{this.props.comment.time}</span><span >{this.props.comment.author}</span>
				<div>{this.props.comment.text}</div>
			</div>
		);
	}
});
var CommentList = React.createClass({
	getInitialState: function(){
		return {'data':[{
			author:'ybb',
			time:'2010-11-30 17:33',
			text:'非常好！！！强势关注！'
		},{
			author:'ybb',
			time:'2010-11-30 17:33',
			text:'非常好！！！强势关注！'
		},{
			author:'ybb',
			time:'2010-11-30 17:33',
			text:'非常好！！！强势关注！'
		},]}
	},
	render: function(){
		var commentNode = this.state.data.map(function(comment){
			return <Comment comment={comment}>
					</Comment>
		})
		return (
			<div className="commentList" >
				{commentNode}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	handleSubmit: function(e){
		e.preventDefault();
	    var author = this.refs.author.value.trim();
	    var text = this.refs.text.value.trim();
	    if (!text || !author) {
	      return;
	    }
	    // TODO: send request to the server
	    this.props.onCommentSubmit({author:author,text:text});
	    this.refs.author.value = '';
	    this.refs.text.value = '';
	    return;
	},
	render: function(){
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="name" ref="author" /><br/>
				<input type="text" placeholder="something" ref="text" /><br/>
				<input type="submit" value="sure" />
			</form>
		);
	}
})

var CommentBox = React.createClass({
	getInitialState: function(){
		return {data:[]};
	},
	loadCommentsFromServer: function(){
		$.ajax({
			url: this.props.url,
			datatype: 'json',
			cache:false,
			success: function(data){
				this.setState({data:data});
			}.bind(this),
			error: function(xhr, status, err){
				console.log(this.props.url,status,err.toString());
			}.bind(this)
		})
	},
	handleCommentSubmit: function(comment){
		var comments = this.state.data;
		var newComments = comments.concat(comment);
		this.setState({data:newComments});
		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      type: 'POST',
	      data: comment,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	},
	componentDidMount: function(){
		this.loadCommentsFromServer();
	},
	render: function(){
		return (
			<div className = "commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox url="http://localhost:3000/api/comments"/>,
	document.getElementById('content')
);