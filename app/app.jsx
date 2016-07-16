var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
import Timer from 'app/components/Timer.jsx';
import Countdown from 'app/components/Countdown.jsx';

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="countdown" component={Countdown}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
