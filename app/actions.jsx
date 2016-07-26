import thunk from 'redux-thunk';

export const START_LOAD_TODOS = 'start-load-todos';
export const FINISH_LOAD_TODOS = 'finish-load-todos';
export const ERROR_LOAD_TODOS = 'error-load-todos';

export const START_ADD_TODO = 'start-add-todo';
export const FINISH_ADD_TODO = 'finish-add-todo';
export const ERROR_ADD_TODO = 'error-add-todo';

export const START_TOGGLE_TODO = 'start-toggle-todo';
export const FINISH_TOGGLE_TODO = 'finish-toggle-todo';
export const ERROR_TOGGLE_TODO = 'error-toggle-todo';

export const UPDATE_TODO_FROM_SERVER = 'update-todo-from-server';

export const TOGGLE_TODO = 'toggle-todo';
export const UPDATE_SEARCH_TEXT = 'update-search-text';
export const TOGGLE_SHOW_ALL = 'toggle-show-all';

export const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';

export default function actions(api) {
  return {
    addTodo(text) {
      return dispatch => {
        dispatch({ type: START_ADD_TODO });
        return api.addTodo(text)
          .then(o => dispatch({ type: FINISH_ADD_TODO, o }))
          .catch(e => dispatch({ type: ERROR_ADD_TODO, e }));
      };
    },
    loadTodos() {
      return dispatch => {
        dispatch({type: START_LOAD_TODOS});
        return api.getTodos()
          .then(todos => dispatch({ type: FINISH_LOAD_TODOS, todos }))
          .catch(e => dispatch({ type: ERROR_LOAD_TODOS, e}));
      };
    },
    toggleTodo(id, completed) {
      return dispatch => {
        dispatch({type: START_TOGGLE_TODO, id, completed});
        return api.updateTodo(id, { completed })
          .then(() => dispatch({ type: FINISH_TOGGLE_TODO, id }))
          .catch(e => dispatch({ type: ERROR_TOGGLE_TODO, id, e }));
      };
    },
    updateTodoFromServer(id, todo) {
      return { type: UPDATE_TODO_FROM_SERVER, id, todo };
    },
    updateSearchText(searchText) {
      return { type: UPDATE_SEARCH_TEXT, searchText };
    },
    toggleShowAll(showAll) {
      return { type: TOGGLE_SHOW_ALL, showAll };
    },
    updateNewTodoText(text) {
      return { type: UPDATE_NEW_TODO_TEXT, text };
    }
  };
};
