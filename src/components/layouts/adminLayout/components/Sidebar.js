import PropTypes from "prop-types";
import React from 'react'
import {Container, Header, Icon, Image, Menu, Sidebar} from 'semantic-ui-react'
import './Sidebar.scss';
import SmallLogo from '../../../../assets/logos/small.png';
import BigLogo from '../../../../assets/logos/Asset8.png';
import {Link} from "react-router-dom";
import Observables from "../../../../utils/observables";
import authenticationBackgroundImage from "../../../../assets/backgrounds/authenticationBackground.jpg";

class AdminLayoutSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  headerLogo() {
    return <Menu.Header className={this.state.expanded ? 'sidebar-header expanded' : 'sidebar-header'}>
      <Image src={this.state.expanded ? BigLogo : SmallLogo} size='small'/>
    </Menu.Header>;
  }


  footerBox() {
    return <Menu.Header className={this.state.expanded ? 'sidebar-footer expanded' : 'sidebar-footer'}>
      <Header className={'sidebar-footer-wrapper'} textAlign={'center'}>
        <Image src='https://i.ya-webdesign.com/images/default-avatar-png-6.png' size='small' bordered centered circular/>
        {this.state.expanded && <br/>}
        {this.state.expanded && <h3>{this.state.expanded && "Ferenc Farkas"}</h3>}
        {this.state.expanded && <div>
          <Header.Subheader as={Link} to={'/profile'}>Profile</Header.Subheader>
          <Header.Subheader as={Link} to={'/login'} onClick={() => {
            localStorage.clear();
            location.href = '/login';
          }}>Sign out</Header.Subheader>
        </div>}</Header>
    </Menu.Header>;
  }

  render() {
    return <Sidebar.Pushable as={Container} fluid>
      <Sidebar
        className={'sidebar-component'} style={{backgroundImage: 'url('+authenticationBackgroundImage+')'}}
        as={Menu}
        animation='push'
        inverted
        borderless={true}
        vertical
        visible={true}
        size={'massive'}
        width={this.state.expanded ? 'wide' : 'very thin'}
        /*onMouseOver={() => this.setState({expanded: true})}
        onMouseLeave={() => this.setState({expanded: false})}*/
      >

        {this.headerLogo()}

        <Menu.Item as={Link} to={'/home'}>
          <Icon name='home'/>
          <span className={this.state.expanded ? 'menu-label visible' : 'menu-label hidden'}>Home</span>
        </Menu.Item>

        <Menu.Item as={Link} to={'/patients'}>
          <Icon name='cog'/>
          <span className={this.state.expanded ? 'menu-label visible' : 'menu-label hidden'}>My patients</span>
        </Menu.Item>

        {this.footerBox()}
      </Sidebar>
      <Sidebar.Pusher dimmed={false}>
        {this.props.children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>;
  }
}

AdminLayoutSidebar.propTypes = {
  children: PropTypes.any
};

export default AdminLayoutSidebar;
