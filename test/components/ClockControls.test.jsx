import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';

import ClockControls from 'app/components/ClockControls.jsx';

const render = TestUtils.renderIntoDocument;

function noopControls(running) {
  return <ClockControls
    running={running}
    onPause={() => {}}
    onContinue={() => {}}
    onClear={() => {}}/>;
}

describe('ClockControls', () => {
  it('should exist', () => expect(ClockControls).toExist());
  describe('render', () => {
    it('pause when running', () => expect(shallow(noopControls(true)).find('.button').at(0).text()).toBe('Pause'));
    it('continue when not running', () => expect(shallow(noopControls(false)).find('.button').at(0).text()).toBe('Continue'));
    it('clear when running', () => expect(shallow(noopControls(true)).find('.button').at(1).text()).toBe('Clear'));
    it('clear when not running', () => expect(shallow(noopControls(false)).find('.button').at(1).text()).toBe('Clear'));
  });
});
