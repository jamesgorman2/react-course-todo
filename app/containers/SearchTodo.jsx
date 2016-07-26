import { connect } from 'react-redux'
import SearchTodo from 'app/components/SearchTodo.jsx'
import * as Api from 'app/api/TodoApi.jsx';
import actions from 'app/actions.jsx';

const updateSearchText = actions(Api).updateSearchText;
const toggleShowAll = actions(Api).toggleShowAll;

function mapState(state, ownProps) {
  return {
    searchText: state.searchText,
    showAll: state.showAll,
  };
}

function mapDispatch(dispatch, ownProps) {
  return {
    search: searchText => dispatch(updateSearchText(searchText)),
    setShowAll: showAll => dispatch(toggleShowAll(showAll)),
  };
}

export default connect(mapState, mapDispatch)(SearchTodo);
