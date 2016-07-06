//组件
var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList" >
				Hello,world!I am a commentList.
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