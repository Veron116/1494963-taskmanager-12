const isExpired = dueDate => {
  if (dueDate === null) {
    return false;
  }

  let currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);
  currentDate = new Date(currentDate);

  return currentDate.getTime() > dueDate.getTime();
};

const isRepeating = repeating => {
  return Object.values(repeating).some(Boolean);
};

export const createTaskTemplate = taskParams => {
  const {color, description, dueDate, isArchive, isFavorite, repeating} = taskParams;
  const date = dueDate !== null ? dueDate.toLocaleString('en-US', {day: 'numeric', month: 'long'}) : '';
  const deadLineClass = isExpired(dueDate) ? 'card--deadline' : '';
  const repeatingClass = isRepeating(repeating) ? 'card--repeat' : '';
  const archiveClass = isArchive ? 'card__btn--archive card__btn--disabled' : 'card__btn--archive';
  const favoriteClass = isFavorite ? 'card__btn--favorites card__btn--disabled' : 'card__btn--favorites';

  return `<article class="card card--${color} ${deadLineClass} ${repeatingClass}">
              <div class="card__form">
              <div class="card__inner">
                  <div class="card__control">
                  <button type="button" class="card__btn card__btn--edit">
                      edit
                  </button>
                  <button type="button" class="card__btn ${archiveClass}">
                      archive
                  </button>
                  <button
                      type="button"
                      class="card__btn card__btn--favorites ${favoriteClass}"
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
                  <p class="card__text">${description}</p>
                  </div>
  
                  <div class="card__settings">
                  <div class="card__details">
                    <div class="card__dates">
                      <div class="card__date-deadline">
                        <p class="card__input-deadline-wrap">
                          <span class="card__date">${date}</span>
                          <span class="card__time">16:15</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </article>`;
};
