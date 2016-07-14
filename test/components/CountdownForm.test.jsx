import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import CountdownForm from 'app/components/CountdownForm.jsx';

const render = TestUtils.renderIntoDocument;

describe('CountdownForm', () => {
  it('should exist', () => expect(CountdownForm).toExist());
  describe('onKeyPress', () => {
    it('start countdown on enter', () => {
      const spy = expect.createSpy();
      const countdownForm = render(<CountdownForm startCountdown={spy}/>);
      countdownForm.setState({seconds: 109});

      countdownForm.onKeyPress({key: '\n', keyCode: 13, preventDefault() {}});

      expect(spy).toHaveBeenCalledWith(109);
    });
    it('not start countdown on enter with 0 seconds', () => {
      const spy = expect.createSpy();
      const countdownForm = render(<CountdownForm startCountdown={spy}/>);

      countdownForm.onKeyPress({key: '\n', keyCode: 13, preventDefault() {}});

      expect(spy).toNotHaveBeenCalled();
    });
    it('allow number', () => {
      const spy = expect.createSpy();
      const countdownForm = render(<CountdownForm startCountdown={() => {}}/>);

      countdownForm.onKeyPress({key: '1', preventDefault: spy});

      expect(spy).toNotHaveBeenCalled();
    });
    it('drop non-number', () => {
      const spy = expect.createSpy();
      const countdownForm = render(<CountdownForm startCountdown={() => {}}/>);
      countdownForm.onKeyPress({key: 't', preventDefault: spy});

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('onChange', () => {
    it('update state', () => {
      const countdownForm = render(<CountdownForm startCountdown={() => {}}/>);
      countdownForm.onChange({target: {value: '1234'}});

      expect(countdownForm.state.seconds).toBe(1234);
    });
    it('update form', () => {
      const countdownForm = render(<CountdownForm startCountdown={() => {}}/>);
      countdownForm.onChange({target: {value: '1234'}});

      expect(countdownForm.refs.input.value).toBe('1234');
    });
  });

  describe('button click', () => {
    it('not start countdown on 0 seconds', () => {
      const spy = expect.createSpy();
      const countdownForm = render(<CountdownForm startCountdown={spy}/>);

      TestUtils.Simulate.click(countdownForm.refs.button);

      expect(spy).toNotHaveBeenCalled();
    });
    it('start countdown', () => {
      const spy = expect.createSpy();
      const countdownForm = render(<CountdownForm startCountdown={spy}/>);
      countdownForm.setState({seconds: 109});

      TestUtils.Simulate.click(countdownForm.refs.button);

      expect(spy).toHaveBeenCalledWith(109);
    });
  });
});
