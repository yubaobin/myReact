/**
 * 异步请求
 * @param
 * @param options { actionTpyes: { before, complete, fail }, params, api }
 * @param dispatch
 */
export default (options, dispatch) => {
  return new Promise((resolve, reject) => {
    const { actionTpyes, api, params } = options
    actionTpyes.before && dispatch({ type: actionTpyes.before });
    if (api) {
      api(params).then((res) => {
        if (actionTpyes.complete) {
          dispatch({ type: actionTpyes.complete, data: res, msg: '' });
          resolve(res);
        } else {
          throw new Error('complete action is request')
        }
      }).catch((err) => {
        actionTpyes.fail && dispatch({type: actionTpyes.fail, data: err, msg: ''});
        reject(err);
      })
    } else {
      throw new Error('api is request')
    }
  })
}