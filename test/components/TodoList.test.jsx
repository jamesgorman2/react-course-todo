import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';

import TodoList from 'app/components/TodoList.jsx';
import Todo from 'app/components/Todo.jsx';

const render = TestUtils.renderIntoDocument;

function expectEqualListLength(todos) {
  const todoList = render(<TodoList todos={todos}/>);
  const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
  expect(todoComponents.length).toBe(todos.length);
}

describe('TodoList', () => {
  it('should exist', () => expect(TodoList).toExist());

  it('should render empty list', () => {
    expectEqualListLength([]);
  });
  it('should render single item', () => {
    expectEqualListLength([{id: 1, text: 'foo'}]);
  });
  it('should render many items', () => {
    expectEqualListLength([{id: 2, text: 'bar'}, {id: 3, text: 'baz'}]);
  });
  it('should render ids in order given', () => {
    const todos = [{id: 2, text: 'bar'}, {id: 3, text: 'baz'}, {id: 1, text: 'foo'}];
    const todoList = render(<TodoList todos={todos}/>);
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todoComponents.map(c => c.props.todo.id)).toEqual(todos.map(c => c.id));
  });
  it('should render texts in order given', () => {
    const todos = [{id: 2, text: 'bar'}, {id: 3, text: 'baz'}, {id: 1, text: 'foo'}];
    const todoList = render(<TodoList todos={todos}/>);
    const todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todoComponents.map(c => c.props.todo.text)).toEqual(todos.map(c => c.text));
  });
});
