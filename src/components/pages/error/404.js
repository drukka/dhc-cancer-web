import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Icon} from "semantic-ui-react";

// Since this component is simple and static, there's no parent container for it.
const Error404 = () => {
  return (
    <div>
      <h2 className="alt-header">Error - 404</h2>
      <p>
        The content you try to reach is not available this time. Please try again later!
      </p>
      <Button icon="like" />

      <Button size="small" color="green">
        <Icon name="download" />
        Download
      </Button>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Link to="/">Go back to see the HomeIndex component <strong>didn't lose state (but reload in background)</strong></Link>
      </p>
    </div>
  );
};

export default Error404;
