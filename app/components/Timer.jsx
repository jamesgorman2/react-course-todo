import React from 'react';
import Clock from 'app/components/Clock.jsx';
import ClockControls from 'app/components/ClockControls.jsx';
import TimerForm from 'app/components/TimerForm.jsx';

export const STOPPED = 'stopped';
export const RUNNING = 'running';
export const PAUSED = 'paused';

export default React.createClass({
  getInitialState() {
    return {
      seconds: 0,
      status: STOPPED
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      if (this.state.status === RUNNING) {
        this.timer = setInterval(() => {
          this.setState({seconds: this.state.seconds + 1});
        }, 1000);
      }
      if (this.timer && (this.state.status === STOPPED || this.state.status === PAUSED)) {
        clearInterval(this.timer);
        this.timer = false;
      }
    }
  },
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  startTimer() {
    this.setState({
      status: RUNNING
    });
  },
  pauseTimer() {
    if (this.state.status === RUNNING) {
      this.setState({status: PAUSED});
    }
  },
  continueTimer() {
    if (this.state.status === PAUSED) {
      this.setState({status: RUNNING});
    }
  },
  clearTimer() {
    this.setState({seconds: 0, status: STOPPED});
  },
  render() {
    return (
      <div>
        <Clock seconds={this.state.seconds}/>
        {
            this.state.status === STOPPED ?
              <TimerForm startTimer={this.startTimer}/> :
              <ClockControls
                running={this.state.status === RUNNING}
                onPause={this.pauseTimer}
                onContinue={this.continueTimer}
                onClear={this.clearTimer}/>
        }
      </div>
    );
  }
});
