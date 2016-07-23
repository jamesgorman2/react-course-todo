import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';

import TodoApp from 'app/components/TodoApp.jsx';

const render = TestUtils.renderIntoDocument;

describe('TodoApp', () => {
  it('should exist', () => expect(TodoApp).toExist());
  it('should start empty', () => {
    const app = render(<TodoApp />);
    expect(app.state.todos.length).toBe(0);
  });
  it('should add todo', () => {
    const app = render(<TodoApp />);
    app.addTodo('foo');
    expect(app.state.todos).toEqual([{id: 0, text: 'foo'}]);
  });
  it('should increment id and append', () => {
    const app = render(<TodoApp />);
    app.addTodo('foo');
    app.addTodo('bar');
    expect(app.state.todos).toEqual([{id: 0, text: 'foo'}, {id: 1, text: 'bar'}]);
  });
});
