import SiteMenuView from './view/menu';
import FilterView from './view/filter';
import SortView from './view/board-filter';
import {createTaskTemplate} from './view/task';
import {createEditTask} from './view/edit-task';
import LoadMoreButtonView from './view/load-btn';
import BoardWrapView from './view/board-wrap';
import TaskListView from './view/tasks-wrap';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter';
import {renderTemplate, renderElement, renderPosition} from './utils';

const TASKS_COUNT = 15;
const TASK_COUNT_PER_STEP = 8;

const tasks = new Array(TASKS_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

renderElement(siteHeaderElement, new SiteMenuView().getElement(), renderPosition.BEFOREEND);
renderElement(siteMainElement, new FilterView(filters).getElement(), renderPosition.BEFOREEND);

const boradComponent = new BoardWrapView();
renderElement(siteMainElement, boradComponent.getElement(), renderPosition.BEFOREEND);
renderElement(boradComponent.getElement(), new SortView().getElement(), renderPosition.AFTERBEGIN);

const taskListComponent = new TaskListView();
renderElement(boradComponent.getElement(), taskListComponent.getElement(), renderPosition.BEFOREEND);
renderTemplate(taskListComponent.getElement(), createEditTask(tasks[0]), renderPosition.BEFOREEND);

for (let i = 1; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
  renderTemplate(taskListComponent.getElement(), createTaskTemplate(tasks[i]), `beforeend`);
}

if (tasks.length > TASK_COUNT_PER_STEP) {
  let renderedTaskCount = TASK_COUNT_PER_STEP;

  const loadMoreButtonComponent = new LoadMoreButtonView();

  renderTemplate(boradComponent.getElement(), loadMoreButtonComponent.getElement(), renderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, (event) => {
    event.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
      .forEach((task) => renderTemplate(taskListComponent.getElement(), createTaskTemplate(task), `beforeend`));

    renderedTaskCount += TASK_COUNT_PER_STEP;

    if (renderedTaskCount >= tasks.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
}

// renderTemplate(mainContentElement, new FilterView(filters).getElement(), renderPosition.BEFOREEND);
// renderTemplate(boardWrapElement, createTasksWrap(), `beforeend`);
// const tasksWrapElement = boardWrapElement.querySelector(`.board__tasks`);
