var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TodoApp from 'app/components/TodoApp.jsx';
import reducers from 'app/reducers.jsx';
import { setShowAll, getShowAll, subscribeToTodos } from 'app/api/TodoApi.jsx';
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';

const loadTodos = actions(Api).loadTodos;
const updateTodoFromServer = actions(Api).updateTodoFromServer;

// App css
require('style!css!sass!applicationStyles')

const store = createStore(
  reducers,
  { showAll: getShowAll() },
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f => f)
  )
);
store.subscribe(() => {
  const { showAll } = store.getState();
  setShowAll(showAll);
});

subscribeToTodos((id, todo) => store.dispatch(updateTodoFromServer(id, todo)));
//store.dispatch(loadTodos());

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
