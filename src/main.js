import {createMenu} from './view/menu.js';
import {createFilter} from './view/filter.js';
import {createBoardWrap} from './view/board-wrap.js';
import {createBoardFilter} from './view/board-filter';
import {createTasksWrap} from './view/tasks-wrap';
import {createTask} from './view/task';
import {createLoadBtn} from './view/load-btn';

const render = function (container, template, place) {
  container.insertAdjacentHTML(place, template);
};

const TASKS_COUNT = 5;
const mainContentElement = document.querySelector(`.main`);
const menuWrapElement = mainContentElement.querySelector(`.main__control`);
render(menuWrapElement, createMenu(), `beforeend`);
render(mainContentElement, createFilter(), `beforeend`);
render(mainContentElement, createBoardWrap(), `beforeend`);
const boardWrapElement = mainContentElement.querySelector(`.board`);
render(boardWrapElement, createBoardFilter(), `afterbegin`);
render(boardWrapElement, createTasksWrap(), `beforeend`);
const tasksWrapElement = boardWrapElement.querySelector(`.board__tasks`);
for (let i = 0; i < TASKS_COUNT; i++) {
  render(tasksWrapElement, createTask(), `afterbegin`);
}
render(boardWrapElement, createLoadBtn(), `beforeend`);
