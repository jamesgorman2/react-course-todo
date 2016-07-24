import React from "react";
import TodoApp from 'app/components/TodoApp.jsx';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, updateSearchText, toggleShowAll } from 'app/actions.jsx';

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

function mapState(state) {
  const todos = state.todos.filter(filter(state.searchText, state.showAll));
  todos.sort(sort);
  return {
    todos: state.todos,
    searchText: state.searchText,
    showAll: state.showAll,
  }
}

function mapDispatch(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
    updateSearchText: searchText => dispatch(updateSearchText(searchText)),
    toggleShowAll: showAll => dispatch(toggleShowAll(showAll)),
  };
}

export default connect(mapState, mapDispatch)(TodoApp);
