//组件
var Comment = React.createClass({
	rawMarkup: function() {
	    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
	    return { __html: rawMarkup };
	  },
	render: function(){
		return (
			<div className="comment" >
				<h1>{this.props.author}</h1>
				<span dangerouslySetInnerHTML={this.rawMarkup()} />
			</div>
		);
	}
});
var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList" >
				<Comment author="ybb1" >第一条评论</Comment>
				<Comment author="ybb2" ><div>第二条评论</div></Comment>
				<Comment author="ybb3" ><div>第三条评论</div></Comment>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm" >
				Hello,world!I am a commentForm.
			</div>
		);
	}
})

var CommentBox = React.createClass({
	render: function(){
		return (
			<div className = "commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);