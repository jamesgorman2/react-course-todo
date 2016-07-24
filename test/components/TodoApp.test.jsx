import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';

import TodoApp from 'app/components/TodoApp.jsx';

const render = TestUtils.renderIntoDocument;

describe('TodoApp', () => {
  it('should exist', () => expect(TodoApp).toExist());
});
