export const ADD_TODO = 'add-todo';
export const TOGGLE_TODO = 'toggle-todo';
export const UPDATE_SEARCH_TEXT = 'update-search-text';
export const TOGGLE_SHOW_ALL = 'toggle-show-all';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(id, completed) {
  return { type: TOGGLE_TODO, id, completed };
}

export function updateSearchText(searchText) {
  return { type: UPDATE_SEARCH_TEXT, searchText };
}

export function toggleShowAll(showAll) {
  return { type: TOGGLE_SHOW_ALL, showAll };
}
