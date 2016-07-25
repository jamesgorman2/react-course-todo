var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ReduxTodoApp from 'app/components/ReduxTodoApp.jsx';
import reducers from 'app/reducers.jsx';
import { setTodos, getTodos, setShowAll, getShowAll } from 'app/api/TodoApi.jsx';

// App css
require('style!css!sass!applicationStyles')

const store = createStore(
  reducers,
  {todos: getTodos(), showAll: getShowAll()},
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f => f)
  )
);

store.subscribe(() => {
  const { todos, showAll } = store.getState();
  setTodos(todos);
  setShowAll(showAll);
});

ReactDOM.render(
  <Provider store={store}>
    <ReduxTodoApp />
  </Provider>,
  document.getElementById('app')
);
