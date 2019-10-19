import React, {useState} from 'react';
import {Button, Grid, Icon, Image, List, Pagination} from "semantic-ui-react";
import "./listView.scss";
import {default as Settings} from "../../../config/settings";

const {itemsPerPage} = Settings.API.params.list;

// eslint-disable-next-line react/prop-types
const ListView = ({data = []}) => {
  const [activePage,setActivePage] = useState(1);

  const setPage = (event,params) => setActivePage(params.activePage);

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <List verticalAlign='middle' animated size={'huge'} pointing>
            {data.slice(
              (activePage - 1) * itemsPerPage,
              activePage * itemsPerPage
            ).map((listItem,index) => <List.Item key={'listItem_'+index}>
              <List.Content floated='right'>
                <Button animated='vertical'>
                  <Button.Content hidden>patient</Button.Content>
                  <Button.Content visible>
                    <Icon name='checkmark' />
                  </Button.Content>
                </Button>
              </List.Content>
              <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
              <List.Content>
                <strong>{listItem.fullname}</strong><br/>
                <small>{listItem.username}</small>
              </List.Content>
            </List.Item>)}
          </List>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16} textAlign={'center'}>
          <Pagination
            className={'pagination-margin-top'}
            defaultActivePage={activePage}
            onPageChange={setPage}
            pointing
            secondary
            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
            prevItem={{ content: <Icon name='angle left' />, icon: true }}
            nextItem={{ content: <Icon name='angle right' />, icon: true }}
            totalPages={Math.round(data.length / itemsPerPage)}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default ListView
