'use strict';

const render = function (container, template, place) {
    container.insertAdjacentHTML(place, template);
}
const TASKS_COUNT = 5;
const mainContentElement = document.querySelector('.main');

const createMenuTemplate = () => {
    return (
        `<section class="control__btn-wrap">
            <input
            type="radio"
            name="control"
            id="control__new-task"
            class="control__input visually-hidden"
            />
            <label for="control__new-task" class="control__label control__label--new-task">+ ADD NEW TASK</label>
            <input
            type="radio"
            name="control"
            id="control__task"
            class="control__input visually-hidden"
            checked
            />
            <label for="control__task" class="control__label">TASKS</label>
            <input
            type="radio"
            name="control"
            id="control__statistic"
            class="control__input visually-hidden"
            />
            <label for="control__statistic" class="control__label">STATISTICS</label>
        </section>`
    );
};
const menuWrapElement = mainContentElement.querySelector('.main__control');
render(menuWrapElement, createMenuTemplate(), 'beforeend');

const createFilterTemplate = () => {
    return (
        `<section class="main__filter filter container">
        <input
          type="radio"
          id="filter__all"
          class="filter__input visually-hidden"
          name="filter"
          checked
        />
        <label for="filter__all" class="filter__label">
          ALL <span class="filter__all-count">15</span></label
        >
        <input
          type="radio"
          id="filter__overdue"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__overdue" class="filter__label"
          >OVERDUE <span class="filter__overdue-count">0</span></label
        >
        <input
          type="radio"
          id="filter__today"
          class="filter__input visually-hidden"
          name="filter"
          disabled
        />
        <label for="filter__today" class="filter__label"
          >TODAY <span class="filter__today-count">0</span></label
        >
        <input
          type="radio"
          id="filter__favorites"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__favorites" class="filter__label"
          >FAVORITES <span class="filter__favorites-count">7</span></label
        >
        <input
          type="radio"
          id="filter__repeating"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__repeating" class="filter__label"
          >Repeating <span class="filter__repeating-count">2</span></label
        >
        <input
          type="radio"
          id="filter__archive"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__archive" class="filter__label"
          >ARCHIVE <span class="filter__archive-count">115</span></label
        >
        </section>`
    );
};
render(mainContentElement, createFilterTemplate(), 'beforeend');

const createBoardWrapTemplate = () => {
    return (
        `<section class="board container"></section>`
    );
};
render(mainContentElement, createBoardWrapTemplate(), 'beforeend');
const boardWrapElement = mainContentElement.querySelector('.board');
const createBoardFilterTemplate = () => {
    return (
        `<div class="board__filter-list">
            <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
            <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
            <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
        </div>`
    );
};
render(boardWrapElement, createBoardFilterTemplate(), 'afterbegin');
const createTasksWrapTemplate = () => {
    return (
        `<div class="board__tasks"></div>`
    );
};
const createTaskTemplate = () => {
    return (
        `<article class="card card--yellow">
            <div class="card__form">
            <div class="card__inner">
                <div class="card__control">
                <button type="button" class="card__btn card__btn--edit">
                    edit
                </button>
                <button type="button" class="card__btn card__btn--archive">
                    archive
                </button>
                <button
                    type="button"
                    class="card__btn card__btn--favorites card__btn--disabled"
                >
                    favorites
                </button>
                </div>

                <div class="card__color-bar">
                <svg class="card__color-bar-wave" width="100%" height="10">
                    <use xlink:href="#wave"></use>
                </svg>
                </div>

                <div class="card__textarea-wrap">
                <p class="card__text">Example task with custom color and without date.</p>
                </div>

                <div class="card__settings">
                <div class="card__details">
                </div>
                </div>
            </div>
            </div>
        </article>`
    );
};
render(boardWrapElement, createTasksWrapTemplate(), 'beforeend');
const tasksWrapElement = boardWrapElement.querySelector('.board__tasks');
for (let i = 0; i < TASKS_COUNT; i++) {
    render(tasksWrapElement, createTaskTemplate(), 'afterbegin');
}

const createLoadBtnTemplate = () => {
    return (
        `<button class="load-more" type="button">load more</button>`
    );
};
render(boardWrapElement, createLoadBtnTemplate(), 'beforeend');