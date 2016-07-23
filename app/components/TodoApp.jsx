import React from "react";
import TodoList from 'app/components/TodoList.jsx';
import AddTodo from 'app/components/AddTodo.jsx';

export default React.createClass({
  getInitialState() {
    return {
      todos: [],
    };
  },
  addTodo(text) {
    this.setState({
      todos: [...this.state.todos, {id: this.state.todos.length, text}]
    });
  },
  render() {
    return (
      <div>
        <div>Todo</div>
        <TodoList todos={this.state.todos}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
});
