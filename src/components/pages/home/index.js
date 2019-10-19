import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Divider, Feed, Header, Icon} from "semantic-ui-react";

// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const HomeIndex = () => {
  const header = () => (
    <Header as='h2'>
      <Icon name='home' />
      <Header.Content>
        Feed
        <Header.Subheader>Check what happening around you</Header.Subheader>
      </Header.Content>
      <Divider/>
    </Header>
  );

  return (
    <div>
      {header()}
    <Feed>

      <Feed.Event>
        <Feed.Label image={'https://www.thispersondoesnotexist.com/image?'+Math.random()} />
        <Feed.Content>
          <Feed.Summary>
            <a>Helen Troll</a> added <a>2 medical document(s)</a>
            <Feed.Date className={'pull-right'}>4 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra images>
            <a>
              <img src='https://react.semantic-ui.com/images/wireframe/image.png' alt={''}/>
            </a>
            <a>
              <img src='https://react.semantic-ui.com/images/wireframe/image.png'  alt={''}/>
            </a>
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image={'https://www.thispersondoesnotexist.com/image?'+Math.random()} />
        <Feed.Content>
          <Feed.Summary>
            <a>Helen Troll</a> marked you as his/her <a>doctor</a>
            <Feed.Date className={'pull-right'}>4 days ago</Feed.Date>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>

    </Feed>
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
