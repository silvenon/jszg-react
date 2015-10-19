import React from 'react';

export default (props) => {
  const id = props.label.toLowerCase().replace(' ', '-');
  return (
    <div className="form-group">
      <label htmlFor={id}>{props.label}</label>
      <input
        id={id}
        className="form-control age"
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
