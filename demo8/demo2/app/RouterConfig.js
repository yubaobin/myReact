import React from 'react';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';   
import ConfigureStore from './base/stores/ConfigureStore';

import Launch from "./Launch"; 
import ProductIndexView from "fyBus/product/views/ProductIndexView";  
import ProductDetailView from "fyBus/product/views/ProductDetailView"; 

const store = ConfigureStore(); 

var RouterConfig=(
	<Provider store={store} key="provider">
		<Router history={hashHistory}>     
        <Route path="/" component={Launch} />   
        <Route path="/index" component={ProductIndexView} />  
      	<Route path="/detail" component={ProductDetailView} />
      </Router>
	</Provider>);

module.exports=RouterConfig; 