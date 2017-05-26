/**
 * Created by yohouakira on 2017/5/26.
 */
import { EventEmitter } from 'events'
class ButtonStore extends EventEmitter{
  constructor() {
    super();
    this.items = [];
  }
  getAll() {
    return this.items;
  }
  addItem(text) {
    this.items.push(text);
  }
  emitChange() {
    this.emit('change');
  }
  addChangeListener(callback) {
    this.on('change', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

export default new ButtonStore();
