import React from "react";

export const PropTodo = React.PropTypes.shape({
  id: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
});

export default React.createClass({
  propTypes: {
    todo: PropTodo
  },
  render() {
    return (
      <div>{this.props.todo.text}</div>
    );
  }
});
