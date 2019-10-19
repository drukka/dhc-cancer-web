import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import authActions from "../../../actions/authActions";
import userActions from "../../../actions/userActions";
import {connect} from "react-redux";
import {Button, Card, Checkbox, Form, Icon} from "semantic-ui-react";
import {pages as PagesConfig} from "../../../config/pages";
import {default as AppSettings} from "../../../config/settings";
import authenticationBackgroundImage from "../../../assets/backgrounds/authenticationBackground.jpg";

const LoginIndex = ({auth, authActions, user, userActions}) => {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    console.log('user',user);
    console.log('auth',auth);
  },[auth,user]);

  const submitForm = event => {setLoading(true); logInAction(getFormData(event))};
  const getFormData = event => {return {'email': event.target.email.value, 'password': event.target.password.value}};
  const logInAction = formData => authActions.signInAction(formData.email, formData.password).then(console.log).catch(console.error);

  const loginForm = () => {
    return (
      <Form onSubmit={submitForm} id={'loginForm'}>
        <Form.Field>
          <label className={'text-left'}>E-mail</label>
          <input placeholder='example@mail.com' name={'email'} type={'email'} disabled={loading}/>
        </Form.Field>
        <Form.Field>
          <label className={'text-left'}>Password</label>
          <input placeholder='******' name={'password'} type={'password'} disabled={loading}/>
        </Form.Field>
        <Button type='submit' animated={'vertical'} fluid loading={loading}>
            <Button.Content visible>Log in</Button.Content>
            <Button.Content hidden>
              <Icon name='stethoscope' />
            </Button.Content>
        </Button>
      </Form>);
  };

  return <Card fluid style={{backgroundImage: 'url('+authenticationBackgroundImage+')'}}>
    <Card.Content>
      <Card.Header>Log in to <strong>{AppSettings.App.name}</strong></Card.Header>
      {loginForm()}
    </Card.Content>
    <Card.Content extra>
      <Link to={PagesConfig.ForgotPassword.link}>
        Forgot your password?
      </Link>
    </Card.Content>
  </Card>
};

function mapStateToProps(state) {
  return {
    user: state.user,
    auth: state.auth,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginIndex);
