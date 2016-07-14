import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';

import Clock from 'app/components/Clock.jsx';

const render = TestUtils.renderIntoDocument;

describe('Clock', () => {
  it('should exist', () => expect(Clock).toExist());
  describe('formatTime', () => {
    const clock = render(<Clock/>);
    it('format zero seconds', () => expect(clock.formatTime(0)).toBe('00:00'));
    it('format 1 second', () => expect(clock.formatTime(1)).toBe('00:01'));
    it('format 11 seconds', () => expect(clock.formatTime(11)).toBe('00:11'));
    it('format 59 second', () => expect(clock.formatTime(59)).toBe('00:59'));
    it('format 1 minute', () => expect(clock.formatTime(60)).toBe('01:00'));
    it('format 1 minute 1 second', () => expect(clock.formatTime(61)).toBe('01:01'));
    it('format 10 minutes 1 second', () => expect(clock.formatTime(601)).toBe('10:01'));
    it('format 60 minutes', () => expect(clock.formatTime(3600)).toBe('60:00'));
    it('format 99 minutes 59 seconds', () => expect(clock.formatTime(5999)).toBe('99:59'));
  });
  describe('render', () => {
    it('default to 0 seconds', () => expect(shallow(<Clock/>).find('.clock-text').text()).toBe('00:00'));
    it('accept argument', () => expect(shallow(<Clock seconds={65}/>).find('.clock-text').text()).toBe('01:05'));
    it('to be a div', () => expect(shallow(<Clock/>).type()).toBe('div'));
    it('have class clock', () => expect(shallow(<Clock/>).hasClass('clock')).toBe(true));
    it('one child', () => expect(shallow(<Clock/>).children().length).toBe(1));
    it('child to be a span', () => expect(shallow(<Clock/>).childAt(0).type()).toBe('span'));
    it('child to have class clock-text', () => expect(shallow(<Clock/>).childAt(0).hasClass('clock-text')).toBe(true));
  });
});
