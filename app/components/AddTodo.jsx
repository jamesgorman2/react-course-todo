import React from "react";

export default React.createClass({
  getDefaultProps() {
    return {text: null};
  },
  propTypes: {
    text: React.PropTypes.string,
    loading: React.PropTypes.bool.isRequired,
    updateText: React.PropTypes.func.isRequired,
    addTodo: React.PropTypes.func.isRequired,
  },
  onKeyPress(e) {
    if ((e.keyCode || e.which) === 13) {
      this.onSubmit();
      e.preventDefault();
    }
  },
  onChange(e) {
    this.props.updateText(e.target.value === '' ? null : e.target.value);
  },
  onSubmit(e) {
    if (this.props.text && this.props.text.trim()) {
      this.props.addTodo(this.props.text.trim());
      this.props.updateText(null);
    }
  },
  render() {
    return (
      <div className="container__footer">
        <input
          type="text"
          ref="input"
          placeholder="Add a todo"
          value={this.props.text != null ? this.props.text : ''}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          disabled={this.props.loading}/>
        <button
          className="button expanded"
          ref="button"
          onClick={this.onSubmit}
          disabled={this.props.loading}
        >
          Add Todo
        </button>
      </div>
    );
  }
});
