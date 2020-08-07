import {createMenu} from './view/menu.js';
import {createFilterTemplate} from './view/filter.js';
import {createBoardWrap} from './view/board-wrap.js';
import {createBoardFilter} from './view/board-filter';
import {createTasksWrap} from './view/tasks-wrap';
import {createTaskTemplate} from './view/task';
import {createEditTask} from './view/edit-task';
import {createLoadBtnTemplate} from './view/load-btn';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter';

const render = function (container, template, place) {
  container.insertAdjacentHTML(place, template);
};

const TASKS_COUNT = 15;
const TASK_COUNT_PER_STEP = 8;

const tasks = new Array(TASKS_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const mainContentElement = document.querySelector(`.main`);
const menuWrapElement = mainContentElement.querySelector(`.main__control`);
render(menuWrapElement, createMenu(), `beforeend`);
render(mainContentElement, createFilterTemplate(filters), `beforeend`);
render(mainContentElement, createBoardWrap(), `beforeend`);
const boardWrapElement = mainContentElement.querySelector(`.board`);
render(boardWrapElement, createBoardFilter(), `afterbegin`);
render(boardWrapElement, createTasksWrap(), `beforeend`);
const tasksWrapElement = boardWrapElement.querySelector(`.board__tasks`);
render(tasksWrapElement, createEditTask(tasks[0]), `afterbegin`);
for (let i = 0; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
  render(tasksWrapElement, createTaskTemplate(tasks[i]), `beforeend`);
}

if (tasks.length > TASK_COUNT_PER_STEP) {
  let renderedTaskCount = TASK_COUNT_PER_STEP;

  render(boardWrapElement, createLoadBtnTemplate(), `beforeend`);

  const loadBtn = boardWrapElement.querySelector(`.load-more`);

  loadBtn.addEventListener(`click`, (event) => {
    event.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
      .forEach((task) => render(tasksWrapElement, createTaskTemplate(task), `beforeend`));

    renderedTaskCount += TASK_COUNT_PER_STEP;

    if (renderedTaskCount >= tasks.length) {
      loadBtn.remove();
    }
  });
}
