/**
 * 
 * 本页面是用于建立ProductIndex页面所需要用到的相关数据模型以及相应数据操作
 * 也是redux的 Reducer
 */
import * as types from '../action/ActionTypes'; 
import CreateReducer from 'fyBase/reducers/CreateReducer';
//ProductIndex的页面数据模型 
var model = {list:[]};
 

/**
 * [ProductIndexModel description]
 * @param {[type]} _model 没有实例化的模型数据，需要在reducer执行前执行初始化
 * @param {[type]} action 来自action的参数集合 
 */
var  ProductIndexReducer = CreateReducer(model, {
    [types.GET_LIST](state,action){
     	var _state=Object.assign({}, model);
    		_state.list=action.list;
        	return _state;
    }
});
module.exports=ProductIndexReducer;