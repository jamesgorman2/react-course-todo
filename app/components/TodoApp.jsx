import React from "react";
import SearchTodo from 'app/components/SearchTodo.jsx';
import TodoList from 'app/components/TodoList.jsx';
import AddTodo from 'app/components/AddTodo.jsx';

export default React.createClass({
  getInitialState() {
    return {
      todos: [],
      searchText: null,
      showAll: false,
    };
  },
  addTodo(text) {
    this.setState({
      todos: [...this.state.todos, {id: this.state.todos.length, text}]
    });
  },
  search(text) {
    this.setState({
      searchText: text.trim().toLowerCase()
    });
  },
  setShowAll(showAll) {
    this.setState({
      showAll: showAll
    });
  },
  render() {
    return (
      <div>
        <div>Todo</div>
        <SearchTodo
          search={this.search}
          setShowAll={this.setShowAll}
          searchText={this.state.searchText}
          showAll={this.state.showAll}/>
        <TodoList todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
});
