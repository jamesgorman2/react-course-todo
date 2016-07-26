import { connect } from 'react-redux';
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';
import AddTodo from 'app/components/AddTodo.jsx';

const addTodo = actions(Api).addTodo;
const updateNewTodoText = actions(Api).updateNewTodoText;

function mapState(state, ownProps) {
  return {
    loading: state.addTodo.loading,
    text: state.addTodo.text
  };
}

function mapDispatch(dispatch, ownProps) {
  return {
    addTodo: text => dispatch(addTodo(text)),
    updateText: text => dispatch(updateNewTodoText(text)),
  };
}

export default connect(mapState, mapDispatch)(AddTodo);
