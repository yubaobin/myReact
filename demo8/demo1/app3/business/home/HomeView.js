import React from 'react';
import ReactDom from 'react-dom';
import ProductView from "../product/ProductView";
import {  hashHistory } from "react-router";
var HomeView=React.createClass({
	propTypes:{
		text:React.PropTypes.string
	},
	getInitialState:function(){
		return {
			children:""
		};
	},
	/*
	 挂载前
	 */
	componentWillMount:function(){
		console.log(this.props.location);
		console.log("---->挂载前");
	},
	componentDidMount:function(){
		console.log("---->挂载完成"); 
	},
	componentWillUpdate:function(){
		console.log("---->更新前");
	},
	componentDidUpdate:function(){
		console.log("---->更新后");
	},
	/*
	当接收到外部传入的参数时
	 */
	componentWillReceiveProps:function(props){
		console.log("---->我收到了参数：",props);
	},
	shouldComponentUpdate:function(){
		return true;
	},
	componentWillUnmount:function(){ 
	},
	clickHanle:function(p){ 
		this.setState({children:<ProductView />});
	},
	go:function(){
		hashHistory.push("/product/1000/123");
	},
	render:function () {
		console.log("---->渲染主入口");
		return (<div onClick={this.go}>我要去到产品页面</div>);
	}
});

module.exports=HomeView;