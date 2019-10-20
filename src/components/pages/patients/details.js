import React, {useState} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Divider, Header, Icon, Image, Menu, Segment, Table} from "semantic-ui-react";

const sampleData = [
  {id: 1, fullname: 'Allen Craig', username: '@allen.craig', typeOfCancer: 'Gastric cancer', gender: 'male'},
  {id: 2, fullname: 'Darlene Franklin', username: '@darlene91', typeOfCancer: 'Persistent trophoblastic disease and choriocarcinoma', gender: 'female'},
  {id: 3, fullname: 'stephanie sanchez', username: '@stephanie.sanchez', typeOfCancer: 'Persistent trophoblastic disease and choriocarcinoma', gender: 'female'},
  {id: 4, fullname: 'stephanie sanchez', username: '@stephanie.sanchez', typeOfCancer: 'Persistent trophoblastic disease and choriocarcinoma', gender: 'female'}
];


// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const PatientsDetails = ({match}) => {
  const {patientId} = match.params;
  const [patientData, ] = useState(sampleData.find(item => item.id === parseInt(patientId)));
  const [activeTab, setActiveTab] = useState('Details');

  const handleTabNavigation = (e, { name }) => setActiveTab(name);

  const header = () => (
    <Header as='h2'>
      <Icon name='doctor' />
      <Header.Content>
        {patientData.fullname}
        <Header.Subheader>{patientData.username}</Header.Subheader>
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
          <Menu.Item name='Treatments' onClick={handleTabNavigation} active={activeTab === 'Treatments'}/>
        </Menu>

        <Segment>
          <Image src='https://www.thispersondoesnotexist.com/image' circular size={'small'} floating={'left'}/>

          <Table padded floating={'right'}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Notes</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>John</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>
                  He is a very nice guy and I enjoyed talking to him on the telephone. I
                  hope we get to talk again.
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                <Table.Cell>
                  Jamie was not interested in purchasing our product.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>
      </div>
    );
  };

  return (
    <div>
      {[header(),profileData()]}
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
