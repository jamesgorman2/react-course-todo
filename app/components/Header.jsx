import React from "react";

export default React.createClass({
  propTypes: {
    loggedIn: React.PropTypes.bool.isRequired,
    logOut: React.PropTypes.func.isRequired,
  },
  render() {
    const logOut = this.props.loggedIn ? (
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text interactive">
            <button className="button" onClick={this.props.logOut}>Logout</button>
          </li>
        </ul>
      </div>
    ) : null;

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><h3>Todo App</h3></li>
          </ul>
        </div>
        {logOut}
      </div>
    );
  }
});
