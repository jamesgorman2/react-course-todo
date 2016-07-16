import React from 'react';
import Clock from 'app/components/Clock.jsx';
import ClockControls from 'app/components/ClockControls.jsx';
import CountdownForm from 'app/components/CountdownForm.jsx';

export const STOPPED = 'stopped';
export const RUNNING = 'running';
export const PAUSED = 'paused';

export default React.createClass({
  getInitialState() {
    return {
      secondsRemaining: 0,
      status: STOPPED
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.status !== prevState.status) {
      if (this.state.status === RUNNING) {
        this.timer = setInterval(() => {
          this.setState({secondsRemaining: this.state.secondsRemaining - 1});
        }, 1000);
      }
      if (this.timer && (this.state.status === STOPPED || this.state.status === PAUSED)) {
        clearInterval(this.timer);
        this.timer = false;
      }
    }
    if (this.state.status === RUNNING && this.state.secondsRemaining <= 0) {
      this.setState({status: STOPPED});
    }
  },
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  startCountdown(seconds) {
    this.setState({
      secondsRemaining: seconds,
      status: RUNNING
    });
  },
  pauseCountdown() {
    if (this.state.status === RUNNING) {
      this.setState({status: PAUSED});
    }
  },
  continueCountdown() {
    if (this.state.status === PAUSED) {
      this.setState({status: RUNNING});
    }
  },
  clearCountdown() {
    this.setState({secondsRemaining: 0, status: STOPPED});
  },
  render() {
    return (
      <div>
        <Clock seconds={this.state.secondsRemaining}/>
        {
            this.state.status === STOPPED ?
              <CountdownForm startCountdown={this.startCountdown}/> :
              <ClockControls
                running={this.state.status === RUNNING}
                onPause={this.pauseCountdown}
                onContinue={this.continueCountdown}
                onClear={this.clearCountdown}/>
        }
      </div>
    );
  }
});
