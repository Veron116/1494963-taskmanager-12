import SiteMenuView from './view/menu';
import FilterView from './view/filter';
import SortView from './view/board-filter';
import TaskView from './view/task';
import TaskEditView from './view/edit-task';
import LoadMoreButtonView from './view/load-btn';
import BoardWrapView from './view/board-wrap';
import TaskListView from './view/tasks-wrap';
import {generateTask} from './mock/task';
import {generateFilter} from './mock/filter';
import {render, renderPosition} from './utils';

const TASKS_COUNT = 15;
const TASK_COUNT_PER_STEP = 8;

const tasks = new Array(TASKS_COUNT).fill().map(generateTask);
const filters = generateFilter(tasks);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const renderTask = (taskListElement, task) => {
  const taskComponent = new TaskView(task);
  const taskEditComponent = new TaskEditView(task);

  const replaceCardToForm = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const replaceFormToCard = () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  const onEscKeyDown = (e) => {
    if (e.key === `Escape` || e.key === `Esc`) {
      e.preventDefault();
      replaceFormToCard();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  taskComponent
    .getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      replaceCardToForm();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEditComponent
    .getElement()
    .querySelector(`form`)
    .addEventListener(`submit`, (e) => {
      e.preventDefault();
      replaceFormToCard();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  render(taskListElement, taskComponent.getElement(), renderPosition.BEFOREEND);
};

render(siteHeaderElement, new SiteMenuView().getElement(), renderPosition.BEFOREEND);
render(siteMainElement, new FilterView(filters).getElement(), renderPosition.BEFOREEND);

const boradComponent = new BoardWrapView();
render(siteMainElement, boradComponent.getElement(), renderPosition.BEFOREEND);
render(boradComponent.getElement(), new SortView().getElement(), renderPosition.AFTERBEGIN);

const taskListComponent = new TaskListView();
render(boradComponent.getElement(), taskListComponent.getElement(), renderPosition.BEFOREEND);
render(taskListComponent.getElement(), new TaskEditView(tasks[0]).getElement(), renderPosition.BEFOREEND);

for (let i = 1; i < Math.min(tasks.length, TASK_COUNT_PER_STEP); i++) {
  renderTask(taskListComponent.getElement(), tasks[i]);
}

if (tasks.length > TASK_COUNT_PER_STEP) {
  let renderedTaskCount = TASK_COUNT_PER_STEP;

  const loadMoreButtonComponent = new LoadMoreButtonView();

  render(boradComponent.getElement(), loadMoreButtonComponent.getElement(), renderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, (event) => {
    event.preventDefault();
    tasks
      .slice(renderedTaskCount, renderedTaskCount + TASK_COUNT_PER_STEP)
      .forEach((task) => renderTask(taskListComponent.getElement(), task));

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
