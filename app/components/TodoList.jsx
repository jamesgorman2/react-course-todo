import React from "react";
import Todo, { PropTodo } from 'app/components/Todo.jsx';

export default React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(PropTodo).isRequired,
    toggleCompleted: React.PropTypes.func.isRequired,
  },
  render() {
    const list = this.props.todos.length ?
      this.props.todos.map(todo =>
        (<Todo
          key={todo.id}
          todo={todo}
          toggleCompleted={this.props.toggleCompleted}/>)
      ) :
      (<div className="container__message">Nothing to do</div>);
    return (
      <div>
        {list}
      </div>
    );
  }
});
