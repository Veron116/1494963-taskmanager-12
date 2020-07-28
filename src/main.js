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