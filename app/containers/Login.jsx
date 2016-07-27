import { connect } from 'react-redux';
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';
import Login from 'app/components/Login.jsx';

const logIn = actions(Api).logIn;

function mapState(state, ownProps) {
  return {};
}

function mapDispatch(dispatch, ownProps) {
  return {
    logIn: () => dispatch(logIn()),
  };
}

export default connect(mapState, mapDispatch)(Login);
