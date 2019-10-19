import PropTypes from "prop-types";
import React from "react";
import AdminLayoutSidebar from "./components/Sidebar";
import {Container} from "semantic-ui-react";

import './Layout.scss';

class AdminLayout extends React.Component {
  render() {
    return (<AdminLayoutSidebar>
        <Container fluid className={'layout-main-wrapper'}>{this.props.children}</Container>
      </AdminLayoutSidebar>
    );
  }
}

AdminLayout.propTypes = {
  children: PropTypes.any
};

export default AdminLayout;
