import React from 'react';
import classNames from 'classnames';

const Alert = (props) => (
  <div className={classNames('alert', `alert-${props.type}`)} role="alert">
    <button className="close" type="button" onClick={props.onClose}>{'×'}</button>
    {props.children}
  </div>
);

Alert.propTypes = {
  children: React.PropTypes.node,
  onClose: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired
};

export default Alert;
