import AbstractView from './abstract';

const createTasksWrap = () => {
  return `<div class="board__tasks"></div>`;
};

export default class TaskList extends AbstractView {
  getTemplate() {
    return createTasksWrap();
  }
}
