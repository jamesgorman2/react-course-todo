import React from "react";
import SearchTodo from 'app/components/SearchTodo.jsx';
import TodoList from 'app/components/TodoList.jsx';
import AddTodo from 'app/components/AddTodo.jsx';
import { PropTodo } from 'app/components/Todo.jsx';

export default React.createClass({
  propTypes: {
    todos: React.PropTypes.arrayOf(PropTodo).isRequired,
    searchText: React.PropTypes.string,
    showAll: React.PropTypes.bool.isRequired,
    addTodo: React.PropTypes.func.isRequired,
    toggleTodo: React.PropTypes.func.isRequired,
    updateSearchText: React.PropTypes.func.isRequired,
    toggleShowAll: React.PropTypes.func.isRequired,
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <SearchTodo
                search={this.props.updateSearchText}
                setShowAll={this.props.toggleShowAll}
                searchText={this.props.searchText}
                showAll={this.props.showAll}/>
              <TodoList todos={this.props.todos} toggleCompleted={this.props.toggleTodo}/>
              <AddTodo addTodo={this.props.addTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
