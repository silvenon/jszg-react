import React from 'react';
import classNames from 'classnames';

const Alert = (props) => (
  <div className={classNames('alert', `alert-${props.type}`)} role="alert">
    {props.children}
  </div>
);

Alert.propTypes = {
  children: React.PropTypes.node,
  type: React.PropTypes.string.isRequired
};

export default Alert;
