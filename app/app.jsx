var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TodoApp from 'app/containers/TodoApp.jsx';
import reducers from 'app/reducers.jsx';
import { setShowAll, getShowAll, subscribeToTodos } from 'app/api/TodoApi.jsx';
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';

const loadTodos = actions(Api).loadTodos;
const updateTodoFromServer = actions(Api).updateTodoFromServer;
const setUser = actions(Api).setUser;

// App css
require('style!css!sass!applicationStyles')

const store = createStore(
  reducers,
  { showAll: getShowAll(), auth: {user: Api.loggedInUser()} },
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

Api.onUserLoaded(user => store.dispatch(setUser(user)))

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
