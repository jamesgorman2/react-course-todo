import { connect } from 'react-redux'
import { updateSearchText, toggleShowAll } from 'app/actions.jsx'
import SearchTodo from 'app/components/SearchTodo.jsx'

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
