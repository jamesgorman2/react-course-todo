import { connect } from 'react-redux'
import TodoList from 'app/components/TodoList.jsx'
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';

const toggleTodo = actions(Api).toggleTodo;

function filter(searchText, showAll) {
  return todo => {
    const textBase = searchText ? searchText.trim() : null;
    const re =  textBase ? new RegExp(textBase.replace(/\s+/im, '\s+'), 'im') : null;
    return (showAll || !todo.completed) &&
      (re === null || re.test(todo.text));
  }
}

function sort(t1, t2) {
  if (t1.completed && !t2.completed) {
    return 1;
  }
  if (!t1.completed && t2.completed) {
    return -1;
  }
  return t1.completed ?
    t2.completedAt - t1.completedAt :
    t2.created - t1.created;
}

function mapState(state, ownProps) {
  const todos = Object.keys(state.todos)
    .map(key => {return {...state.todos[key], id: key};})
    .filter(filter(state.searchText, state.showAll));
  todos.sort(sort);
  return { todos };
}

function mapDispatch(dispatch, ownProps) {
  return {
    toggleCompleted: (id, completed) => dispatch(toggleTodo(id, completed)),
  };
}

export default connect(mapState, mapDispatch)(TodoList);
