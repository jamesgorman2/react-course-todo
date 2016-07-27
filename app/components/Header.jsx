import React from "react";

export default React.createClass({
  propTypes: {
    user: React.PropTypes.object,
    logOut: React.PropTypes.func.isRequired,
  },
  render() {
    const logOut = this.props.user ? (
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            <img className="thumb" src={this.props.user.photoURL}/>
            {this.props.user.displayName}
          </li>
          <li className="menu-text">
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
