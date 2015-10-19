import React from 'react';
import classNames from 'classnames';

export default (props) => (
  <div className={classNames('alert', `alert-${props.type}`)} role="alert">
    {props.children}
  </div>
);
