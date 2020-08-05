const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

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
  const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
  const colorIndex = getRandomInteger(0, colors.length - 1);

  return colors[colorIndex];
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
