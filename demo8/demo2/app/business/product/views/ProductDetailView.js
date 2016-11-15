import React from 'react'; 
import {connect} from "react-redux"; 

var ProductDetailView = React.createClass({
	render: function(){
		var id = this.props.ProductDetailReducer.id;
		var list = this.props.ProductIndexReducer.list;
		var res = list[id];
		return (<table>
			<tbody>
				<tr>
				<td>{res.name}</td>
				<td>{res.price}</td>
				<td>{res.num}</td>
				</tr>
				</tbody>
			   </table>);
	}
});

//定义本页面与Redux Store某个Reducer的映射关系方法
//参数 state 就是  store里所有的Reducer映射表 
function mapStateToProps (state) {
	console.log(state);
	//定义本页面props需要从Redux绑定那些Reducer
	var _props={
		ProductIndexReducer:state.ProductIndexReducer,
		ProductDetailReducer:state.ProductDetailReducer 
	};
	return _props
}
//通过redux的 connect方法通过mapStateToProps的描述将相关的Reducer注入本页面
module.exports = connect(mapStateToProps)(ProductDetailView);