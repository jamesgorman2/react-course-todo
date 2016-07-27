import React from "react";
import SearchTodo from 'app/containers/SearchTodo.jsx';
import TodoList from 'app/containers/TodoList.jsx';
import AddTodo from 'app/containers/AddTodo.jsx';
import Header from 'app/containers/Header.jsx';
import Login from 'app/containers/Login.jsx';

export default React.createClass({
  propTypes: {
    user: React.PropTypes.object,
  },
  render() {
    const body = this.props.user ?
    (
      <div className="container">
        <SearchTodo />
        <TodoList />
        <AddTodo />
      </div>
    ) :
    <Login />;

    return (
      <div>
        <Header />
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            {body}
          </div>
        </div>
      </div>
    );
  }
});
