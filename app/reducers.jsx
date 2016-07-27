import { combineReducers } from 'redux';
import {
  FINISH_LOAD_TODOS,
  UPDATE_TODO_FROM_SERVER,
  UPDATE_SEARCH_TEXT,
  TOGGLE_SHOW_ALL,
  START_ADD_TODO,
  FINISH_ADD_TODO,
  ERROR_ADD_TODO,
  UPDATE_NEW_TODO_TEXT,
  START_LOG_IN,
  FINISH_LOG_IN,
  ERROR_LOG_IN,
  START_LOG_OUT,
  FINISH_LOG_OUT,
  ERROR_LOG_OUT,
  SET_LOGGED_IN,
} from 'app/actions.jsx';

function todos(state = {}, action) {
  switch (action.type) {
    case FINISH_LOAD_TODOS:
      return {...state, ...action.todos};
    case UPDATE_TODO_FROM_SERVER:
      const newState = {...state};
      newState[action.id] = action.todo;
      return newState;
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

function addTodo(state = {loading: false, text: null}, action) {
  switch (action.type) {
    case START_ADD_TODO:
      return {...state, loading: true};
    case FINISH_ADD_TODO:
      return {...state, loading: false};
    case ERROR_ADD_TODO:
      return {...state, loading: false};
    case UPDATE_NEW_TODO_TEXT:
      return {...state, text: action.text};
    default:
      return state;
  }
}

function login(state = {loggedIn: false, loggingIn: false, loggingOut: false}, action) {
  switch (action.type) {
    case START_LOG_IN:
      return {...state, loggingIn: true};
    case FINISH_LOG_IN:
      return {...state, loggedIn: true, loggingIn: false};
    case ERROR_LOG_IN:
      return {...state, loggedIn: false, loggingIn: false};
    case START_LOG_OUT:
      return {...state, loggingOut: true};
    case FINISH_LOG_OUT:
      return {...state, loggedIn: false, loggingOut: false};
    case ERROR_LOG_OUT:
      return {...state, loggedIn: false, loggingOut: false};
    case SET_LOGGED_IN:
      return {...state, loggedIn: action.loggedIn};
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  searchText,
  showAll,
  addTodo,
  login,
});
