import {menu} from './view/menu.js';
import {filter} from './view/filter.js';
import {boardWrap} from './view/board-wrap.js';
import {boardFilter} from './view/board-filter';
import {tasksWrap} from './view/tasks-wrap';
import {createTaskTemplate} from './view/task';
import {createEditTask} from './view/edit-task';
import {loadBtn} from './view/load-btn';
import {generateTask} from './mock/task';

const render = function (container, template, place) {
  container.insertAdjacentHTML(place, template);
};

const TASKS_COUNT = 3;
const tasks = new Array(TASKS_COUNT).fill().map(generateTask);
console.log(tasks);

const mainContentElement = document.querySelector(`.main`);
const menuWrapElement = mainContentElement.querySelector(`.main__control`);
render(menuWrapElement, menu(), `beforeend`);
render(mainContentElement, filter(), `beforeend`);
render(mainContentElement, boardWrap(), `beforeend`);
const boardWrapElement = mainContentElement.querySelector(`.board`);
render(boardWrapElement, boardFilter(), `afterbegin`);
render(boardWrapElement, tasksWrap(), `beforeend`);
const tasksWrapElement = boardWrapElement.querySelector(`.board__tasks`);
render(tasksWrapElement, createEditTask(), `afterbegin`);
for (let i = 0; i < TASKS_COUNT; i++) {
  render(tasksWrapElement, createTaskTemplate(tasks[i]), `beforeend`);
}
render(boardWrapElement, loadBtn(), `beforeend`);
