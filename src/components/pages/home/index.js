import React, {useEffect, useState} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Divider, Feed, Header, Icon, Segment} from "semantic-ui-react";
import TimeAgo from "react-timeago";
import time from "javascript-time-ago/modules/style/time";
import LoaderIndex from "../../modules/loader";

// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const HomeIndex = () => {
  const [patientTimeEntries, setPatientTimeEntries] = useState([]);
  const [activeTab, setActiveTab] = useState('Details');

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      window.swaggerClient.apis.user.listUsersTestTimeEntries({userId: 1}).then(response => {
        if(response.ok)
          setPatientTimeEntries(response.body.reverse());
        setLoading(false);
      });
  },[]);

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

      {loading ? <LoaderIndex/> : <Feed>
        {patientTimeEntries.length > 0 && [...patientTimeEntries].slice(0,14).map((timeEntry,index) => {
          if(!timeEntry.time) return false;
          return <Feed.Event key={index}>
            <Feed.Label image={'https://i.ya-webdesign.com/images/default-avatar-png-6.png'}/>
            <Feed.Content>
              <Feed.Summary>
                <a>Brigi Molnar</a> submitted a new entry: <a>{timeEntry.type}</a>
                <Feed.Date className={'pull-right'}>
                  <TimeAgo date={timeEntry.time} />
                </Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                <strong>{timeEntry[timeEntry.type]} {timeEntry.type === 'weight' ? 'kg' : '°C'}</strong>
              </Feed.Extra>
            </Feed.Content>
          </Feed.Event>
        })}
      </Feed>}
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
