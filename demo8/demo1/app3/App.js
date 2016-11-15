import "./css.less";
import React from 'react';
import ReactDom from 'react-dom'; 

import Launch from "./Launch"; 
import HomeView from "fyBus/home/HomeView"; 
import ProductView from "fyBus/product/ProductView"; 
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from "react-router";


var routes=(<Router history={hashHistory}>     
				<Route path="/" component={Launch} />   
				<Route path="/home" component={HomeView} /> 
				<Route path="/product/:count(/:id)" component={ProductView} /> 
			</Router>);

ReactDom.render((routes),document.getElementById("root-container"));
