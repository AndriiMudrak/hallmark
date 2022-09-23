export const CATEGORY_TYPES = {
  schedule: 'schedule',
  movies: 'movies',
  countdownToChristmas: 'countdownToChristmas',
  homeAndFamily: 'homeAndFamily',
  watchLive: 'watchLive',
  channelLocator: 'channelLocator',
};

export const CATEGORY_TITLES = {
  [CATEGORY_TYPES.schedule]: 'SCHEDULE',
  [CATEGORY_TYPES.movies]: 'MOVIES',
  [CATEGORY_TYPES.countdownToChristmas]: 'COUNTDOWN TO CHRISTMAS',
  [CATEGORY_TYPES.homeAndFamily]: 'HOME & FAMILY',
  [CATEGORY_TYPES.watchLive]: 'WATCH LIVE',
  [CATEGORY_TYPES.channelLocator]: 'CHANNEL LOCATOR',
};

export const MAIN_CATAGORIES = [
  {title: CATEGORY_TITLES.schedule, value: CATEGORY_TYPES.schedule},
  {title: CATEGORY_TITLES.movies, value: CATEGORY_TYPES.movies},
  {title: CATEGORY_TITLES.countdownToChristmas, value: CATEGORY_TYPES.countdownToChristmas},
  {title: CATEGORY_TITLES.homeAndFamily, value: CATEGORY_TYPES.homeAndFamily},
  {title: CATEGORY_TITLES.watchLive, value: CATEGORY_TYPES.watchLive},
]; 

export const RIGHT_CATEGORIES = [
  {title: CATEGORY_TITLES.channelLocator, value: CATEGORY_TYPES.channelLocator},
]
