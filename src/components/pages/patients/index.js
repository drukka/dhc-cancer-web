import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Divider, Header, Icon} from "semantic-ui-react";
import ListView from "../../modules/listView";

const sampleData = [
  {id: 1, fullname: 'Allen Craig', username: '@allen.craig', typeOfCancer: 'Gastric cancer', gender: 'male'},
  {id: 2, fullname: 'Darlene Franklin', username: '@darlene91', typeOfCancer: 'Persistent trophoblastic disease and choriocarcinoma', gender: 'female'},
  {id: 3, fullname: 'stephanie sanchez', username: '@stephanie.sanchez', typeOfCancer: 'Persistent trophoblastic disease and choriocarcinoma', gender: 'female'},
  {id: 4, fullname: 'stephanie sanchez', username: '@stephanie.sanchez', typeOfCancer: 'Persistent trophoblastic disease and choriocarcinoma', gender: 'female'}
];


// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const PatientsIndex = () => {
  const header = () => (
    <Header as='h2'>
      <Icon name='doctor' />
      <Header.Content>
        My patients
        <Header.Subheader>Here you can view your patients</Header.Subheader>
      </Header.Content>
      <Divider/>
    </Header>
  );

  return (
    <div>
      {header()}
      <ListView data={[...sampleData]}/>
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
)(PatientsIndex);
