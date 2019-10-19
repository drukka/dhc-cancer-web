import React, {useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import {bindActionCreators} from "redux";
import authActions from "../../../actions/authActions";
import userActions from "../../../actions/userActions";
import {connect} from "react-redux";
import {Button, Card, Form, Icon, Message} from "semantic-ui-react";
import {pages as PagesConfig} from "../../../config/pages";
import {default as AppSettings} from "../../../config/settings";
import authenticationBackgroundImage from "../../../assets/backgrounds/authenticationBackground.jpg";

const LoginIndex = ({authReducer, authActions}) => {
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const setLoadingFalse = () => setLoading(false);

  const submitForm = event => {setLoading(true); logInAction(getFormData(event))};
  const getFormData = event => {return {'email': event.target.email.value, 'password': event.target.password.value}};
  const logInAction = formData => authActions.signInAction(formData.email, formData.password).finally(setLoadingFalse);

  const loginForm = () => {
    return (
      <Form onSubmit={submitForm} id={'loginForm'} error={!!authReducer.error}>
        <Message
          error
          header='Failed to process your request'
          content='You have entered invalid e-mail address or password'
        />
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

  if(authReducer.token != null) return <Redirect to={PagesConfig.Main.link}/>
  return <Card fluid style={{backgroundImage: 'url('+authenticationBackgroundImage+')'}}>
    <Card.Content>
      <Card.Header className={'logo-wrapper'}>Log in to <strong>{AppSettings.App.name}</strong></Card.Header>
      {loginForm()}
    </Card.Content>
    <Card.Content extra>
      <Link to={"#"+PagesConfig.ForgotPassword.link}>
        Forgot your password?
      </Link>
    </Card.Content>
  </Card>
};

function mapStateToProps(state) {
  return {
    authReducer: state.authReducer
  };
}
function mapDispatchToProps(dispatch) {
  return {
    authActions: bindActionCreators(authActions, dispatch),
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginIndex);
