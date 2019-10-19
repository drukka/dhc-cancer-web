import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import authActions from "../../../actions/authActions";
import userActions from "../../../actions/userActions";
import {connect} from "react-redux";

const LoginSignup = () => {
  return <div>Signup page<br/><Link to={'/login'}>login</Link></div>
};

export default LoginSignup;
