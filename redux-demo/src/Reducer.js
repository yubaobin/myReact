/**
 * Created by yohouakira on 2017/6/1.
 */
const Reducer = (state = 0, action) => {
  const { type, value = 1 } = action;
  switch (type) {
    case 'ADD' :
      return state + value;
    case 'MIN' :
      return state - value;
    default :
      return state;
  }
}

export default Reducer;
