import {createElement} from '../utils';

const createTasksWrap = () => {
  return `<div class="board__tasks"></div>`;
};

export default class TaskList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTasksWrap();
  }

  getElement() {
    if (!this._element) {
      return (this._element = createElement(this.getTemplate()));
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
