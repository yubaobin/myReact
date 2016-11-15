import * as types from './ActionTypes'; 
import data from "./data.json";
 

export function getProductList(){  
  return (dispatch, getState) => { 
        dispatch({
           type:types.GET_LIST,
           list:data
        }); 
  }
} 

/**
 * 根据id获取响应的产品数据
 */

 export function showProductDetailById(id){
 	return (dispatch,getState) => {
 		dispatch({
 			type:types.SHOW_DETAIL_BY_ID,
 			id:id
 		})
 	}
 }