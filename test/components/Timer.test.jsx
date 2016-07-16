import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import sinon from 'sinon';

import Timer, { STOPPED, RUNNING, PAUSED } from 'app/components/Timer.jsx';

const render = TestUtils.renderIntoDocument;

let clock = null;

describe('Timer', () => {
  it('should exist', () => expect(Timer).toExist());
  it('initialise stopped', () => {
    const timer = render(<Timer />);

    expect(timer.state).toEqual({seconds: 0, status: STOPPED});
  })
  it('start timer', () => {
    const timer = render(<Timer />);
    timer.startTimer();

    expect(timer.state).toEqual({seconds: 0, status: RUNNING});
  });
  it('increment on tick', () => {
    const clock = sinon.useFakeTimers()
    const timer = render(<Timer />);
    timer.startTimer();
    clock.tick(1000);
    expect(timer.state).toEqual({seconds: 1, status: RUNNING});
    clock.restore();
  });
  it('pause halts increment', () => {
    const clock = sinon.useFakeTimers()
    const timer = render(<Timer />);
    timer.startTimer();
    clock.tick(1000);
    timer.pauseTimer();
    clock.tick(1000);
    expect(timer.state).toEqual({seconds: 1, status: PAUSED});
    clock.restore();
  });
  it('continue resumes increment', () => {
    const clock = sinon.useFakeTimers()
    const timer = render(<Timer />);
    timer.startTimer();
    clock.tick(1000);
    timer.pauseTimer();
    clock.tick(1000);
    timer.continueTimer();
    clock.tick(1000);
    expect(timer.state).toEqual({seconds: 2, status: RUNNING});
    clock.restore();
  });
  it('pause continue ignores partial seconds', () => {
    const clock = sinon.useFakeTimers()
    const timer = render(<Timer />);
    timer.startTimer();
    clock.tick(1500);
    timer.pauseTimer();
    timer.continueTimer();
    clock.tick(500);
    expect(timer.state).toEqual({seconds: 1, status: RUNNING});
    clock.tick(500);
    expect(timer.state).toEqual({seconds: 2, status: RUNNING});
    clock.restore();
  });
});
