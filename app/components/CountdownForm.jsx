import React from 'react';

export default React.createClass({
  getInitialState() {
    return {seconds: null};
  },
  propTypes: {
    startCountdown: React.PropTypes.func.isRequired
  },
  onKeyPress(e) {
    if (e.key.match(/[^\d]/)) {
      if ((e.keyCode || e.which) === 13) {
        this.onSubmit();
      }
      e.preventDefault();
    }
  },
  onChange(e) {
    this.setState({
      seconds: e.target.value === '' ? null : parseInt(e.target.value, 10)
    });
  },
  onSubmit() {
    if (this.state.seconds > 0) {
      this.props.startCountdown(this.state.seconds);
    }
  },
  render() {
    return (
      <div>
        <input
          type="text"
          ref="input"
          placeholder="Time in seconds"
          value={this.state.seconds != null ? this.state.seconds : ''}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}/>
        <button className="button expanded" ref="button" onClick={this.onSubmit}>Start</button>
      </div>
    );
  }
});
