import React from 'react';
import Title from './title';
import Alert from './alert';
import Field from './field';

export default React.createClass({
  propTypes: {},

  getInitialState() {
    return {
      age: 20,
      message: ''
    };
  },

  handleChange(event) {
    this.setState({
      age: parseInt(event.target.value)
    });
  },

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      message: this.getMessage()
    });
  },

  clear() {
    this.setState({
      message: ''
    });
  },

  getMessage() {
    let message = (
      <Alert type="danger" onClose={this.clear}>
        <p>{`You're too young for dating, go play with lego bricks or something.`}</p>
      </Alert>
    );
    if (this.state.age >= 15) {
      message = (
        <Alert type="info" onClose={this.clear}>
          <p>{`You are allowed to go ${Math.ceil(this.state.age / 2 + 7)} years old and above.`}</p>
        </Alert>
      );
    }
    return message;
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Title>Dating Calculator</Title>

        <p>What is your dating pool?</p>

        <Field
          label="Your age"
          type="number"
          onChange={this.handleChange}
          value={this.state.age} />

        <p><button className="btn btn-primary" type="submit">Calculate</button></p>

        {this.state.message}
      </form>
    );
  }
});
