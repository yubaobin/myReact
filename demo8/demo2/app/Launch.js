import React from 'react';  
import {Link} from 'react-router';
var  Launch = React.createClass({
	render:function() {   
		return (
			<div className="root-container">
				  <Link to="/index">前往产品列表</Link>
        	</div>);
	}
});
module.exports=Launch;