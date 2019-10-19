import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import authActions from "../../../actions/authActions";
import userActions from "../../../actions/userActions";
import {connect} from "react-redux";

const HomeIndex = ({authActions, userActions}) => {
  useEffect(() => {
    setTimeout(() => authActions.signInAction('wolferi93@gmail.com', '0123456789'), 3000);
  }, [authActions]);

  return <div>Login page<br/><Link to={'/signup'}>signup</Link></div>
};

function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  false,
  mapDispatchToProps
)(HomeIndex);
