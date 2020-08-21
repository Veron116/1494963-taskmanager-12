import {getRandomInteger} from '../utils/common';
import {COLORS} from '../const';

const generateTaskDescription = () => {
  const description = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
  const descriptionIndex = getRandomInteger(0, description.length - 1);

  return description[descriptionIndex];
};

const generateDueDate = () => {
  const isDueDate = Boolean(getRandomInteger(0, 1));

  if (!isDueDate) {
    return null;
  }

  const maxDueDate = 7;
  const dueDateCount = getRandomInteger(-maxDueDate, maxDueDate);
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + dueDateCount);

  return new Date(currentDate);
};

const generateRepeatingTask = () => {
  return {
    mo: false,
    tu: false,
    we: Boolean(getRandomInteger(0, 1)),
    th: false,
    fr: Boolean(getRandomInteger(0, 1)),
    sa: false,
    su: false,
  };
};

const generateTaskColor = () => {
  const colorIndex = getRandomInteger(0, COLORS.length - 1);

  return COLORS[colorIndex];
};

export const generateTask = () => {
  const dueDate = generateDueDate();
  const repeating =
    dueDate === null
      ? generateRepeatingTask()
      : {
        mo: false,
        tu: false,
        we: false,
        th: false,
        fr: false,
        sa: false,
        su: false,
      };

  return {
    dueDate,
    description: generateTaskDescription(),
    repeating,
    color: generateTaskColor(),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isArchive: Boolean(getRandomInteger(0, 1)),
  };
};
