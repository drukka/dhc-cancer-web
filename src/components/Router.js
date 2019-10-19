import PropTypes from "prop-types";
import React from "react";
import {pages} from '../config/pages';
import Layout from "./layouts";
import {Route} from "react-router-dom";

class Router extends React.Component {

  static generateRoute(page) {
    const pageData = pages[page];
    return <Route exact={pageData.exact || false} key={page} path={pageData.link}
                  render={pageData.render ? () => pageData.render : null} component={pageData.component}/>
  }

  render() {
    return <Layout pages={pages}/>;
  }
}

Router.propTypes = {
  children: PropTypes.element,
  user: PropTypes.object
};

export default Router;
