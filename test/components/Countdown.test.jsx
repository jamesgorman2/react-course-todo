import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import sinon from 'sinon';

import Countdown, { STOPPED, RUNNING, PAUSED } from 'app/components/Countdown.jsx';

const render = TestUtils.renderIntoDocument;

let clock = null;

beforeEach(() => clock = sinon.useFakeTimers());
afterEach(() => clock.restore());

describe('Countdown', () => {
  it('should exist', () => expect(Countdown).toExist());
  it('initialise stopped', () => {
    const countdown = render(<Countdown />);

    expect(countdown.state).toEqual({secondsRemaining: 0, status: STOPPED});
  })
  it('start countdown', () => {
    const countdown = render(<Countdown />);
    countdown.startCountdown(5);

    expect(countdown.state).toEqual({secondsRemaining: 5, status: RUNNING});
  });
  it('decrement on tick', () => {
    const countdown = render(<Countdown />);
    countdown.startCountdown(5);
    clock.tick(1000);
    expect(countdown.state).toEqual({secondsRemaining: 4, status: RUNNING});
  });
  it('stop at decrement to 0', () => {
    const countdown = render(<Countdown />);
    countdown.startCountdown(5);
    clock.tick(5000);
    expect(countdown.state).toEqual({secondsRemaining: 0, status: STOPPED});
  });
  it('pause halts decrement', () => {
    const countdown = render(<Countdown />);
    countdown.startCountdown(5);
    clock.tick(1000);
    countdown.pauseCountdown();
    clock.tick(1000);
    expect(countdown.state).toEqual({secondsRemaining: 4, status: PAUSED});
  });
  it('continue resumes decrement', () => {
    const countdown = render(<Countdown />);
    countdown.startCountdown(5);
    clock.tick(1000);
    countdown.pauseCountdown();
    clock.tick(1000);
    countdown.continueCountdown();
    clock.tick(1000);
    expect(countdown.state).toEqual({secondsRemaining: 3, status: RUNNING});
  });
  it('pause continue ignores partial seconds', () => {
    const countdown = render(<Countdown />);
    countdown.startCountdown(5);
    clock.tick(1500);
    countdown.pauseCountdown();
    countdown.continueCountdown();
    clock.tick(500);
    expect(countdown.state).toEqual({secondsRemaining: 4, status: RUNNING});
    clock.tick(500);
    expect(countdown.state).toEqual({secondsRemaining: 3, status: RUNNING});
  });
});
