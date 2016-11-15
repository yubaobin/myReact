import React from 'react';
import ReactDom from 'react-dom';
import HomeView from "fyBus/home/HomeView";
var Launch=React.createClass({
	render:function () {
		return (<div><HomeView /></div>);
	}
});

module.exports=Launch;