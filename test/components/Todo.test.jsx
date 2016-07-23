import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { shallow } from 'enzyme';

import Todo from 'app/components/Todo.jsx';

const render = TestUtils.renderIntoDocument;

describe('Todo', () => {
  it('should exist', () => expect(Todo).toExist());
});
