import {isExpiredTask, isRepeatingTask, isTaskExpiringToday} from '../utils';

const taskToFilterMap = {
  all: (tasks) => {
    return tasks.filter((task) => !task.isArchive).length;
  },
  archive: (tasks) => {
    return tasks.filter((task) => task.isArchive).length;
  },
  favorites: (tasks) => {
    return tasks.filter((task) => !task.isArchive).filter((task) => task.isFavorite).length;
  },
  repeating: (tasks) => {
    return tasks.filter((task) => !task.isArchive).filter((task) => isRepeatingTask(task.repeating)).length;
  },
  today: (tasks) => {
    return tasks.filter((task) => !task.isArchive).filter((task) => isTaskExpiringToday(task.dueDate)).length;
  },
  overdue: (tasks) => {
    return tasks.filter((task) => !task.isArchive).filter((task) => isExpiredTask(task.dueDate)).length;
  },
};

export const generateFilter = (tasks) => {
  return Object.entries(taskToFilterMap).map(([filterName, countTasks]) => {
    return {
      name: filterName,
      count: countTasks(tasks),
    };
  });
};
