import { connect } from 'react-redux';
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';
import Header from 'app/components/Header.jsx';

const logOut = actions(Api).logIn;

function mapState(state, ownProps) {
  return {};
}

function mapDispatch(dispatch, ownProps) {
  return {
    logOut: () => dispatch(logOut()),
  };
}

export default connect(mapState, mapDispatch)(Header);
