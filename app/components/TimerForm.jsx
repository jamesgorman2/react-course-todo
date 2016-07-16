import React from 'react';

export default React.createClass({
  propTypes: {
    startTimer: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <button className="button expanded" ref="button" onClick={this.props.startTimer}>Start</button>
      </div>
    );
  }
});
