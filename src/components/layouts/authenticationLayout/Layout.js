import PropTypes from "prop-types";
import React from "react";
import {Grid} from "semantic-ui-react";
import "./Layout.scss";

class AuthenticationLayout extends React.Component {
  render() {
    return (<div className={"authentication layout"}>
        <div className={'inner-wrap'}>
          <div className="wrap-fluid">
            <Grid>
              <Grid.Column className={'authentication-form'} mobile={16} tablet={12} largeScreen={6} widescreen={6} textAlign={'center'}>
                {this.props.children}
              </Grid.Column>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

AuthenticationLayout.propTypes = {
  children: PropTypes.any
};

export default AuthenticationLayout;
