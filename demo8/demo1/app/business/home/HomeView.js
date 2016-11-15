import React from 'react';
import ReactDom from 'react-dom';
import ProductView from "../product/ProductView";
var HomeView=React.createClass({
	getInitialState:function(){
		return {
			children:""
		};
	},
	clickHanle:function(p){ 
		this.setState({children:<ProductView />});
	},
	render:function () {
		return (<div onClick={()=>{this.clickHanle("abc")}}>home {
			this.state.children}</div>);
	}
});

module.exports=HomeView;