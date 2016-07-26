import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';

import AddTodo from 'app/components/AddTodo.jsx';

const render = TestUtils.renderIntoDocument;

describe('AddTodo', () => {
  it('should exist', () => expect(AddTodo).toExist());
  describe('onKeyPress', () => {
    it('submit on enter', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy} text="text" updateText={() => {}} loading={false}/>);
      add.onKeyPress({key: '\n', keyCode: 13, preventDefault() {}});

      expect(spy).toHaveBeenCalledWith('text');
    });
  });
  describe('onChange', () => {
    it('empty string to null', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={()=>{}} text="text" updateText={spy} loading={false}/>);
      add.onChange({target: {value: ''}});

      expect(spy).toHaveBeenCalledWith(null);
    });
    it('retain whitespace', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={()=>{}} text="text" updateText={spy} loading={false}/>);
      add.onChange({target: {value: '  foo  '}});
      expect(spy).toHaveBeenCalledWith('  foo  ');
    });
  });
  describe('onSubmit', () => {
    it('not submit null', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy} text={null} updateText={() => {}} loading={false}/>);
      add.onSubmit();

      expect(spy).toNotHaveBeenCalled();
    });
    it('not submit empty string', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy} text="" updateText={() => {}} loading={false}/>);
      add.onSubmit();

      expect(spy).toNotHaveBeenCalled();
    });
    it('not submit whitespace only', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy} text="  " updateText={() => {}} loading={false}/>);
      add.onSubmit();

      expect(spy).toNotHaveBeenCalled();
    });
    it('trim whitespace', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy} text="  foo  " updateText={() => {}} loading={false}/>);
      add.setState({text: '  foo '});
      add.onSubmit();

      expect(spy).toHaveBeenCalledWith('foo');

    });
  });
  describe('wiring', () =>{
    it('input onChange', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={()=>{}} text="text" updateText={spy} loading={false}/>);
      const e = {target: {value: 'foo'}};
      TestUtils.Simulate.change(add.refs.input, e);
      expect(spy).toHaveBeenCalledWith('foo');
    });
    it('input onKeyPress', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy} text="foo" updateText={()=>{}} loading={false}/>);
      const e = {};
      TestUtils.Simulate.keyPress(add.refs.input, {key: '\n', keyCode: 13, preventDefault() {}});
      expect(spy).toHaveBeenCalledWith('foo');
    });
    it('button onClick', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy} text="foo" updateText={() => {}} loading={false}/>);
      TestUtils.Simulate.click(add.refs.button);
      expect(spy).toHaveBeenCalledWith('foo');
    });
  });
});
