import React from "react";

export default React.createClass({
  propTypes: {
    logIn: React.PropTypes.func.isRequired,
  },
  render() {
    return (
      <div className="callout callout-auth">
        <h3>Login</h3>
        <div>Login here with your GitHub account.</div>
        <div>
          <button className="button" onClick={this.props.logIn}>Login with GitHub</button>
        </div>
      </div>
    );
  }
});
