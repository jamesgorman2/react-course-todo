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
      const add = render(<AddTodo addTodo={spy}/>);
      add.setState({text: 'text'});
      add.onKeyPress({key: '\n', keyCode: 13, preventDefault() {}});

      expect(spy).toHaveBeenCalledWith('text');
    });
  });
  describe('onChange', () => {
    it('empty string to null', () => {
      const add = render(<AddTodo addTodo={()=>{}}/>);
      add.setState({text: 'text'});
      add.onChange({target: {value: ''}});
      expect(add.state.text).toBe(null);
    });
    it('retain whitespace', () => {
      const add = render(<AddTodo addTodo={()=>{}}/>);
      add.onChange({target: {value: '  foo  '}});
      expect(add.state.text).toBe('  foo  ');
    });
  });
  describe('onSubmit', () => {
    it('not submit null', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy}/>);
      add.setState({text: null});
      add.onSubmit();

      expect(spy).toNotHaveBeenCalled();
    });
    it('not submit empty string', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy}/>);
      add.setState({text: ''});
      add.onSubmit();

      expect(spy).toNotHaveBeenCalled();
    });
    it('not submit whitespace only', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy}/>);
      add.setState({text: '  '});
      add.onSubmit();

      expect(spy).toNotHaveBeenCalled();
    });
    it('trim whitespace', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy}/>);
      add.setState({text: '  foo '});
      add.onSubmit();

      expect(spy).toHaveBeenCalledWith('foo');

    });
  });
  describe('render', () => {
    it('button disabled on empty text', () => {
      const add = shallow(<AddTodo addTodo={()=>{}}/>);
      add.setState({text: null});
      expect(add.find('.button').at(0).prop('disabled')).toBe(true);
    });
    it('button disabled on whitespace only', () => {
      const add = shallow(<AddTodo addTodo={()=>{}}/>);
      add.setState({text: '  '});
      expect(add.find('.button').at(0).prop('disabled')).toBe(true);
    });
    it('button enabled on nonempty text', () => {
      const add = shallow(<AddTodo addTodo={()=>{}}/>);
      add.setState({text: '  foo  '});
      expect(add.find('.button').at(0).prop('disabled')).toBe(false);
    });
  });
  describe('wiring', () =>{
    it('input onChange', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy}/>);
      const e = {target: {value: 'foo'}};
      TestUtils.Simulate.change(add.refs.input, e);
      expect(add.state.text).toBe('foo');
    });
    it('input onKeyPress', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy}/>);
      add.setState({text: 'foo'});
      const e = {};
      TestUtils.Simulate.keyPress(add.refs.input, {key: '\n', keyCode: 13, preventDefault() {}});
      expect(spy).toHaveBeenCalledWith('foo');
    });
    it('button onClick', () => {
      const spy = expect.createSpy();
      const add = render(<AddTodo addTodo={spy}/>);
      add.setState({text: 'foo'});
      TestUtils.Simulate.click(add.refs.button);
      expect(spy).toHaveBeenCalledWith('foo');
    });
  });
});
