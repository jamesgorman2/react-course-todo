import React from 'react';

export default React.createClass({
  propTypes: {
    running: React.PropTypes.bool.isRequired,
    onPause: React.PropTypes.func.isRequired,
    onContinue: React.PropTypes.func.isRequired,
    onClear: React.PropTypes.func.isRequired,
  },
  render() {
    return (
      <div className="controls">
        {
          this.props.running ?
            <button className="button secondary" onClick={this.props.onPause}>Pause</button> :
            <button className="button primary" onClick={this.props.onContinue}>Continue</button>
        }
        <button className="button alert hollow" onClick={this.props.onClear}>Clear</button>
      </div>
    );
  }
});
