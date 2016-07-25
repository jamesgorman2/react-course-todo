import { connect } from 'react-redux'
import { addTodo } from 'app/actions.jsx'
import AddTodo from 'app/components/AddTodo.jsx'

function mapState(state, ownProps) {
  return {};
}

function mapDispatch(dispatch, ownProps) {
  return {
    addTodo: text => dispatch(addTodo(text)),
  };
}

export default connect(mapState, mapDispatch)(AddTodo);
