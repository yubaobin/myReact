//组件
var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment" >
				<h1>{this.props.author}</h1>
				{this.props.text}
			</div>
		);
	}
});
var CommentList = React.createClass({
	render: function(){
		var commentNode = this.props.data.map(function(comment){
			return <Comment author={comment.author}>
					{comment.text}
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
				<CommentList data={this.props.data}/>
				<CommentForm />
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox url="/api/comments"/>,
	document.getElementById('content')
);