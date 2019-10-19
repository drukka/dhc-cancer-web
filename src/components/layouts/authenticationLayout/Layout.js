import PropTypes from "prop-types";
import React from "react";

class AuthenticationLayout extends React.Component {
  render() {
    return (<div className={"authentication layout"}>
      <h1 className={"header"}>Auth Header</h1>
        {this.props.children}
      </div>
    );
  }
}

AuthenticationLayout.propTypes = {
  children: PropTypes.any
};

export default AuthenticationLayout;
