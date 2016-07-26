import React from 'react';
import moment from 'moment';

export const PropTodo = React.PropTypes.shape({
  id: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  created: React.PropTypes.number.isRequired,
  completedAt: React.PropTypes.number,
});

export default React.createClass({
  propTypes: {
    todo: PropTodo,
    toggleCompleted: React.PropTypes.func.isRequired,
  },
  onClick() {
    this.props.toggleCompleted(this.props.todo.id, !this.props.todo.completed);
  },
  formatDate(timestamp) {
    return moment.unix(timestamp).format('D MMMM YYYY @ h:mm:ss A')
  },
  render() {
    const date = this.props.todo.completedAt ?
      (<div>Completed {this.formatDate(this.props.todo.completedAt)}</div>) :
      (<div>Created {this.formatDate(this.props.todo.created)}</div>);
    return (
      <div
          className={this.props.todo.completed ? 'todo todo-completed' : 'todo'}
          onClick={this.onClick}>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={e => e.preventDefault()}/>
        <div>
          {this.props.todo.text}
          <div className="todo__subtext">
            {date}
          </div>
        </div>
      </div>
    );
  }
});
