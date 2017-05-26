/**
 * Created by yohouakira on 2017/5/26.
 */
import { Dispatcher } from 'flux';
import ButtonStore from './ButtonStore';
const AppDispatcher = new Dispatcher();
AppDispatcher.register((action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      ButtonStore.addItem(action.text);
      ButtonStore.emitChange();
      break;
    default:
      break;
  }
})
export default AppDispatcher;