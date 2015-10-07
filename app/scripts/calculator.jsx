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
      <div>
        <div className="page-header">
          <h1>Dejting kalkulator</h1>
        </div>

        <div className="form-group">
          <label htmlFor="age">{'Tvoja dob'}</label>
          <input
            id="age"
            className="form-control calculator-age"
            type="number"
            onChange={this.handleChange}
            value={this.state.age} />
        </div>

        <div className="alert alert-info" role="alert">
          <p>{'Ne smiješ ići ispod '}{this.state.age / 2 + 7}{' godina.'}</p>
        </div>
      </div>
    );
  }
});
