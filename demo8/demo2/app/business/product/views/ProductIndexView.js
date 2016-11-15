import React from 'react'; 
import {connect} from "react-redux"; 
import {Link,hashHistory} from 'react-router'; 
import {getProductList} from "../action";
import {showProductDetailById} from "../action";
/*
演示文件：加载产品列表数据
by ken.liu
 */
var ProductIndexView=React.createClass({ 
	componentWillMount:function(){ 
		//渲染前进行数据加载
		this.loadData();
	},
	//定义数据加载函数
	loadData:function(){
		this.props.dispatch(getProductList());
	}, 
	clickHandle: function(id){
		this.props.dispatch(showProductDetailById(id));
		hashHistory.push('/detail');
	},
	//定义初始化产品列表的函数
	initList:function(data){
		var me=this;
		var items=[];
		for(var i=0;i<data.length;i++){ 
			var item=(<div onClick = {this.clickHandle.bind(this,i)} key={ "item-"+i } >{data[i].name}</div>);
			items.push(item);
		}
		return items;
	},
	//渲染主入口
	render:function () {
		//从props里提取Reducer
		var model=this.props.ProductIndexReducer;
		console.log("--------------->",model);
		return <div>
				产品列表：
				{this.initList(model.list)}
			</div>
	}
}); 

//定义本页面与Redux Store某个Reducer的映射关系方法
//参数 state 就是  store里所有的Reducer映射表 
function mapStateToProps (state) {
	console.log(state);
	//定义本页面props需要从Redux绑定那些Reducer
	var _props={
		ProductIndexReducer:state.ProductIndexReducer 
	};
	return _props
}
//通过redux的 connect方法通过mapStateToProps的描述将相关的Reducer注入本页面
module.exports = connect(mapStateToProps)(ProductIndexView);