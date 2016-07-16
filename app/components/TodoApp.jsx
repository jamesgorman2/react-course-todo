import React from "react";
import TodoList from 'app/components/TodoList.jsx';

export default React.createClass({
  getInitialState() {
    return {
      todos: [
        { id: 1, text: 'todo 1'},
        { id: 2, text: 'todo 3'},
      ]
    };
  },
  render() {
    return (
      <div>
        <div>Todo</div>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
});
