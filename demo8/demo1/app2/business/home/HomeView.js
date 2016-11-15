import React from 'react';
import ReactDom from 'react-dom';
import ProductView from "../product/ProductView";
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
		console.log("---->卸载：",props);
	},
	clickHanle:function(p){ 
		this.setState({children:<ProductView />});
	},
	render:function () {
		console.log("---->渲染主入口");
		return (<div onClick={()=>{this.clickHanle("abc")}}>
				home
				{this.state.children}
			   </div>);
	}
});

module.exports=HomeView;