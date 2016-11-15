import React from 'react';
import ReactDom from 'react-dom';
import HomeView from "fyBus/home/HomeView";
import {  Link,  hashHistory } from "react-router";

var Launch=React.createClass({
	getInitialState:function(){
		return {
			text:"home view from Launch"
		};
	},
	go:function(){
		hashHistory.push("/home");
	},
	render:function () {

		var layout=(<div> 
						<Link to={{ pathname: "/home", query: {id: "123"} }} >我要跳转到HomeView</Link>
						<div onClick={this.go}>我也要跳转到HomeView</div>
					</div>);

		if(this.props.children){
			layout=this.props.children;
		}

		return layout;
	}
});

module.exports=Launch;