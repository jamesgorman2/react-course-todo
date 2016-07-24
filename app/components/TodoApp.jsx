import React from "react";
import SearchTodo from 'app/components/SearchTodo.jsx';
import TodoList from 'app/components/TodoList.jsx';
import AddTodo from 'app/components/AddTodo.jsx';
import uuid from 'node-uuid';
import { getTodos, setTodos, getShowAll, setShowAll } from 'app/api/TodoApi.jsx';
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
  return Object.assign({}, original, newFields);
}

export default React.createClass({
  getInitialState() {
    return {
      todos: getTodos(),
      searchText: null,
      showAll: getShowAll(),
    };
  },
  addTodo(text) {
    this.updateTodos([...this.state.todos, newTodo(text)]);
  },
  search(text) {
    this.setState({
      searchText: text,
    });
  },
  setShowAll(showAll) {
    setShowAll(showAll);
    this.setState({
      showAll: showAll,
    });
  },
  toggleCompleted(id, completed) {
    this.updateTodos(
      [
        ...this.state.todos.map(t =>
          t.id === id ? updateTodo(t, {completed, completedAt: (completed ? moment().unix() : null)}) : t
        )
      ]
    );
  },
  updateTodos(todos) {
    setTodos(todos);
    this.setState({
      todos: todos,
    });
  },
  filter(todo) {
    const textBase = this.state.searchText ? this.state.searchText.trim() : null;
    const re =  textBase ? new RegExp(textBase.replace(/\s+/im, '\s+'), 'im') : null;
    return (this.state.showAll || !todo.completed) &&
      (re === null || re.test(todo.text));
  },
  sort(t1, t2) {
    if (t1.completed && !t2.completed) {
      return 1;
    }
    if (!t1.completed && t2.completed) {
      return -1;
    }
    return t1.completed ?
      t2.completedAt - t1.completedAt :
      t2.created - t1.created;
  },
  render() {
    const todos = this.state.todos.filter(this.filter);
    todos.sort(this.sort);
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <SearchTodo
                search={this.search}
                setShowAll={this.setShowAll}
                searchText={this.state.searchText}
                showAll={this.state.showAll}/>
              <TodoList todos={todos} toggleCompleted={this.toggleCompleted}/>
              <AddTodo addTodo={this.addTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
