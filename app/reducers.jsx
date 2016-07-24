import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, UPDATE_SEARCH_TEXT, TOGGLE_SHOW_ALL } from 'app/actions.jsx';
import uuid from 'node-uuid';
import moment from 'moment';

function newTodo(text) {
  return {
    id: uuid(),
    text,
    completed: false,
    created: moment().unix(),
    completedAt: null,
  }
}

function updateTodo(original, newFields) {
  return {...original, ...newFields};
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, newTodo(action.text)];
    case TOGGLE_TODO:
      return [
        ...state.map(t =>
          t.id === action.id ?
            updateTodo(t, {completed: action.completed, completedAt: (action.completed ? moment().unix() : null)}) :
            t
        )
      ];
    default:
      return state;
  }
}

function searchText(state = null, action) {
  switch (action.type) {
    case UPDATE_SEARCH_TEXT:
      return action.searchText;
    default:
      return state;
  }
}

function showAll(state = false, action) {
  switch (action.type) {
    case TOGGLE_SHOW_ALL:
      return action.showAll;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  searchText,
  showAll
});
