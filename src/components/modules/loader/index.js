import React from 'react';
import {Loader} from "semantic-ui-react";

const LoaderIndex = props => {
  return <Loader {...props} content='Loading' active={true}/>;
};

export default LoaderIndex;
