import React from "react";

export default React.createClass({
  getInitialState() {
    return {text: null};
  },
  propTypes: {
    addTodo: React.PropTypes.func.isRequired,
  },
  onKeyPress(e) {
    if ((e.keyCode || e.which) === 13) {
      this.onSubmit();
      e.preventDefault();
    }
  },
  onChange(e) {
    this.setState({
      text: e.target.value === '' ? null : e.target.value
    });
  },
  onSubmit(e) {
    if (this.state.text && this.state.text.trim()) {
      this.props.addTodo(this.state.text.trim());
      this.setState({text: null})
    }
  },
  render() {
    return (
      <div>
        <input
          type="text"
          ref="input"
          placeholder="Add a todo"
          value={this.state.text != null ? this.state.text : ''}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}/>
        <button
          className="button expanded"
          ref="button"
          onClick={this.onSubmit}
          disabled={!(this.state.text && this.state.text.trim())}
        >
          Add Todo
        </button>
      </div>
    );
  }
});
