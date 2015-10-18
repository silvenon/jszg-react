import React from 'react';

export default React.createClass({
  propTypes: {},

  getInitialState() {
    return {
      age: 20
    };
  },

  handleChange(event) {
    this.setState({
      age: parseInt(event.target.value, 10)
    });
  },

  render() {
    let message;

    if (this.state.age >= 15) {
      message = (
        <div className="alert alert-info" role="alert">
          <p>{'You are allowed to go '}{this.state.age / 2 + 7}{' years old and above.'}</p>
        </div>
      );
    } else {
      message = (
        <div className="alert alert-danger" role="alert">
          <p>{'You\'re too young for dating, go play with lego bricks or something.'}</p>
        </div>
      );
    }

    return (
      <div>
        <div className="page-header">
          <h1>Dating Calculator</h1>
        </div>

        <div className="form-group">
          <label htmlFor="age">{'Your age'}</label>
          <input
            id="age"
            className="form-control calculator-age"
            type="number"
            onChange={this.handleChange}
            value={this.state.age} />
        </div>

        {message}
      </div>
    );
  }
});
