import React, {useState, useEffect} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Divider, Grid, Header, Icon, Image, Menu, Segment, Table, Tab, Feed} from "semantic-ui-react";
import LoaderIndex from "../../modules/loader";
import TimeAgo from 'react-timeago'


// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const PatientsDetails = ({match}) => {
  const {patientId} = match.params;
  const [patientData, setPatientData] = useState({});
  const [patientTimeEntries, setPatientTimeEntries] = useState({});
  const [activeTab, setActiveTab] = useState('Details');

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    window.swaggerClient.apis.user.getUser({userId: patientId}).then(response => {
      if(response.ok)
        setPatientData(response.body);

      window.swaggerClient.apis.user.listUsersTimeEntries({userId: patientId}).then(response => {
        if(response.ok)
          setPatientTimeEntries(response.body.reverse());
        setLoading(false);
      });
    });
  },[]);

  const handleTabNavigation = (e, { name }) => setActiveTab(name);

  const header = () => (
    <Header as='h2'>
      <Icon name='doctor' />
      <Header.Content>
        {patientData.fullname}
        <Header.Subheader>@{patientData.username} / {patientData.typeOfCancer}</Header.Subheader>
      </Header.Content>
      <Divider/>
    </Header>
  );

  const profileData = () => {
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='Details' onClick={handleTabNavigation} active={activeTab === 'Details'}/>
          <Menu.Item name='Time entries' onClick={handleTabNavigation} active={activeTab === 'Time entries'}/>
        </Menu>

        {activeTab === 'Details' && <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width={4} textAlign={'center'}>
                <Image src='https://i.ya-webdesign.com/images/default-avatar-png-6.png' circular size={'small'}/>
              </Grid.Column>
              <Grid.Column width={12}>

                <Table padded floating={'right'} structured>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>Birthdate</Table.Cell>
                      <Table.Cell>{new Date(patientData.birthdate).toLocaleDateString()}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Gender</Table.Cell>
                      <Table.Cell>{patientData.gender}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Share anonymous data</Table.Cell>
                      <Table.Cell>{patientData.anonymousShare ? 'Yes' : 'No'}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Type of cancer</Table.Cell>
                      <Table.Cell>{patientData.typeOfCancer}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Current stage</Table.Cell>
                      <Table.Cell>{patientData.currentStage}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>}

        {activeTab === 'Time entries' && <Segment>

          <Feed>

            <Feed.Event>
              <Feed.Label image={'https://i.ya-webdesign.com/images/default-avatar-png-6.png'}/>
              <Feed.Content>
                <Feed.Summary>
                  <a>{patientData.fullname}</a> uploaded 2 <a>medical document(s)</a>
                  <Feed.Date className={'pull-right'}>yesterday</Feed.Date>
                </Feed.Summary>

                <Feed.Extra images>
                  <a>
                    <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  </a>
                  <a>
                    <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                  </a>
                </Feed.Extra>
              </Feed.Content>
            </Feed.Event>

            {patientTimeEntries.length > 0 && [...patientTimeEntries].map((timeEntry,index) => {
              return <Feed.Event key={index}>
                <Feed.Label image={'https://i.ya-webdesign.com/images/default-avatar-png-6.png'}/>
                <Feed.Content>
                  <Feed.Summary>
                    <a>{patientData.fullname}</a> submitted a new entry: <a>{timeEntry.type}</a>
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

            <Feed.Event>
              <Feed.Label image={'https://i.ya-webdesign.com/images/default-avatar-png-6.png'}/>
              <Feed.Content>
                <Feed.Summary>
                  <a>{patientData.fullname}</a> marked you as his/her <a>doctor</a>
                  <Feed.Date className={'pull-right'}>4 years ago</Feed.Date>
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>

          </Feed>
        </Segment>}
      </div>
    );
  };

  return (
    <div>
      {loading ? <LoaderIndex/> : [header(),profileData()]}
    </div>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(PatientsDetails);
