'use strict';

const render = function (container, template, place) {
    container.insertAdjacentHTML(place, template);
}
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