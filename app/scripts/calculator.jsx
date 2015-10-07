import React from 'react/addons';

export default React.createClass({
  propTypes: {},

  getInitialState() {
    return {
      age: 0
    };
  },

  handleChange(event) {
    this.setState({
      age: event.target.value
    });
  },

  render() {
    return (
      <div className="calculator">
        <input
          className="calculator-age"
          placeholder="Tvoje godine"
          type="number"
          onChange={this.handleChange}
          value={this.state.age} />
        <p>{'Ne smiješ ići ispod:'}</p>
        <div className="calculator-result">{this.state.age / 2 + 7}{' godina'}</div>
      </div>
    );
  }
});
