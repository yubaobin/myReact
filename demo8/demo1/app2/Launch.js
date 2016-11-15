import React from 'react';
import ReactDom from 'react-dom';
import HomeView from "fyBus/home/HomeView";
var Launch=React.createClass({
	getInitialState:function(){
		return {
			text:"home view from Launch"
		};
	},
	render:function () {

		var layout=(<div></div>);

		if(this.props.children){
			layout=this.props.children;
		}
		
		return layout;
	}
});

module.exports=Launch;