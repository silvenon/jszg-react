import React from 'react';
import Title from './title';
import Alert from './alert';
import Field from './field';

export default React.createClass({
  propTypes: {},

  getInitialState() {
    return {
      age: 20
    };
  },

  handleChange(event) {
    this.setState({
      age: parseInt(event.target.value)
    });
  },

  checkAge(){
    let message = (
      <Alert type="danger">
        <p>{`You're too young for dating, go play with lego bricks or something.`}</p>
      </Alert>
    );
    if (this.state.age >= 15) {
      message = (
        <Alert type="info">
          <p>{`You are allowed to go ${this.state.age / 2 + 7} years old and above.`}</p>
        </Alert>
      );
    }
    return message;
  },

  render() {
    const message = this.checkAge();

    return (
      <div>
        <Title>Dating Calculator</Title>

        <Field
          label="Your age"
          type="number"
          onChange={this.handleChange}
          value={this.state.age}
        />

        {message}
      </div>
    );
  }
});