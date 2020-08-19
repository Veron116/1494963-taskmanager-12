import AbstractView from './abstract';

const createBoardWrap = () => {
  return `<section class="board container"></section>`;
};

export default class Board extends AbstractView {
  getTemplate() {
    return createBoardWrap();
  }
}
