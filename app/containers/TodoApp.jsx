import { connect } from 'react-redux';
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';
import TodoApp from 'app/components/TodoApp.jsx';

function mapState(state, ownProps) {
  return {
    loggedIn: false,
  };
}

function mapDispatch(dispatch, ownProps) {
  return {};
}

export default connect(mapState, mapDispatch)(TodoApp);
