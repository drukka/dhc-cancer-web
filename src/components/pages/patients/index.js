import React, {useEffect, useState} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as actions from '../../../actions/userActions';
import {Divider, Header, Icon} from "semantic-ui-react";
import ListView from "../../modules/listView";
import LoaderIndex from "../../modules/loader";

// Since this component is simple and static, there's no parent container for it.
// eslint-disable-next-line react/prop-types
const PatientsIndex = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  useEffect(()=>{
    window.swaggerClient.apis.user.listUsers().then(response => {
      if(response.ok)
        setData(response.body);

      setLoading(false);
    });
  },[]);

  return (
    <div>
      {header()}
      {loading ? <LoaderIndex/> : <ListView data={[...data]}/>}
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
