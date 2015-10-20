import React from 'react';

const Title = (props) => (
  <div className="page-header">
    <h1>{props.children}</h1>
  </div>
);

Title.propTypes = {
  children: React.PropTypes.node
};

export default Title;
