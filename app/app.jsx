var React = require('react');
var ReactDOM = require('react-dom');
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import ReduxTodoApp from 'app/components/ReduxTodoApp.jsx';
import reducers from 'app/reducers.jsx';

// App css
require('style!css!sass!applicationStyles')

const store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : (f => f)));

ReactDOM.render(
  <Provider store={store}>
    <ReduxTodoApp />
  </Provider>,
  document.getElementById('app')
);
