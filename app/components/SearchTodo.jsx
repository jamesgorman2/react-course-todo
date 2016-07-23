import React from "react";

export default React.createClass({
  propTypes: {
    search: React.PropTypes.func.isRequired,
    setShowAll: React.PropTypes.func.isRequired,
    searchText: React.PropTypes.string,
    showAll: React.PropTypes.bool
  },
  onKeyPress(e) {
    if ((e.keyCode || e.which) === 13) {
      e.preventDefault();
    }
  },
  onSearchChange(e) {
    this.props.search(e.target.value);
  },
  onShowAllChange(e) {
    this.props.setShowAll(e.target.checked);
  },
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            ref="search"
            placeholder="Search todos"
            value={this.props.searchText != null ? this.props.searchText : ''}
            onChange={this.onSearchChange}
            onKeyPress={this.onKeyPress}/>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showAll"
              checked={this.props.showAll}
              onChange={this.onShowAllChange}/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});
