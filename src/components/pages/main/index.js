import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Placeholder, Segment} from "semantic-ui-react";


// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const HomeIndex = ({user}) => {

  const loading = <Placeholder>
    <Placeholder.Paragraph>
      <Placeholder.Line/>
      <Placeholder.Line/>
      <Placeholder.Line/>
      <Placeholder.Line/>
    </Placeholder.Paragraph>
  </Placeholder>;

  return (
    <div>
      <h2 className="alt-header">Redux global swaggerClient example</h2>
      <p>
        This is a SwaggerClient dynamic data load in HomeIndex component load
      </p>

      <Segment>
        {loading}
      </Segment>

      <Segment>
        {loading}
      </Segment>
      <p>
        <Link to="/other">Click this link</Link> to jump other page.
      </p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeIndex);
