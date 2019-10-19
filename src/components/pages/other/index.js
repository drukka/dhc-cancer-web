import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Placeholder, Segment} from "semantic-ui-react";


// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const OtherIndex = ({staticState}) => {
  if (!staticState) return <div>Loading...</div>;

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
        űthis is an other
      </p>

      <Segment>
        {staticState.genres.length > 0 ? <ul>
          {staticState.genres.map(({id, name}) => <li key={id}>{name}</li>)}
        </ul> : loading}
      </Segment>

      <Segment>
        {staticState['purchase-packages'].length > 0 ? <ul>
          {staticState['purchase-packages'].map(({id_ios, name}) => <li key={id_ios}>{name}</li>)}
        </ul> : loading}
      </Segment>
      <p>
        <Link to="/home">Click link</Link> to see the home page.
      </p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    staticState: state.swaggerStaticReducer.static
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
)(OtherIndex);
