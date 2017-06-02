/**
 * Created by yohouakira on 2017/6/2.
 */
const Reducer = (state = { count: 0}, action) => {
  const count = state.count;
  switch(action.type) {
    case 'ADD':
      return { count: count + 1 };
    default:
      return state;
  }
}

export default Reducer;
