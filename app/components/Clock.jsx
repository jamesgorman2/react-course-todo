import React from 'react';

export default React.createClass({
  getDefaultProps() {
    return {seconds: 0};
  },
  propTypes: {
    seconds: React.PropTypes.number
  },
  formatTime(rawSeconds) {
    const seconds = rawSeconds % 60;
    const minutes = (rawSeconds - seconds) / 60
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  },
  render() {
    return (
      <div className="clock">
        <span className='clock-text'>
          {this.formatTime(this.props.seconds)}
        </span>
      </div>
    );
  }
});
