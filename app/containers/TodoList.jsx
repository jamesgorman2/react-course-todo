import { connect } from 'react-redux'
import { toggleTodo } from 'app/actions.jsx'
import TodoList from 'app/components/TodoList.jsx'

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
  const todos = state.todos.filter(filter(state.searchText, state.showAll));
  todos.sort(sort);
  return { todos };
}

function mapDispatch(dispatch, ownProps) {
  return {
    toggleCompleted: (id, completed) => dispatch(toggleTodo(id, completed)),
  };
}

export default connect(mapState, mapDispatch)(TodoList);
