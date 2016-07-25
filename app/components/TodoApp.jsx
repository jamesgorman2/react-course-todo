import React from "react";
import SearchTodo from 'app/containers/SearchTodo.jsx';
import TodoList from 'app/containers/TodoList.jsx';
import AddTodo from 'app/containers/AddTodo.jsx';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <SearchTodo />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
});
