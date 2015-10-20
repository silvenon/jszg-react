import React from 'react';

const Field = (props) => {
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

Field.propTypes = {
  label: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
};

export default Field;
