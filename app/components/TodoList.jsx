import React from "react";
import Todo, { PropTodo } from 'app/components/Todo.jsx';

export default React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(PropTodo).isRequired
  },
  render() {
    const list = this.props.todos.map(todo => (<Todo key={todo.id} todo={todo}/>));
    return (
      <div>
        {list}
      </div>
    );
  }
});
