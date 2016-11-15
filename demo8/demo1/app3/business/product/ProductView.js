import React from 'react';
import ReactDom from 'react-dom';

var ProductView=React.createClass({
	render:function () {
		console.log(this.props.routeParams);
		return (<div>ProductView</div>);
	}
});

module.exports=ProductView;