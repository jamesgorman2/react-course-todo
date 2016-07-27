import React from "react";

export default React.createClass({
  propTypes: {
    logOut: React.PropTypes.func.isRequired,
  },
  render() {
    const logOut = (
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text interactive">
            <button className="button" onClick={this.props.logOut}>Logout</button>
          </li>
        </ul>
      </div>
    );

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
