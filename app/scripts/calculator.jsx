import React from 'react/addons';

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

  render() {
    let message;

    if (this.state.age >= 15) {
      message = (
        <div className="alert alert-info" role="alert">
          <p>{'Ne smiješ ići ispod '}{this.state.age / 2 + 7}{' godina.'}</p>
        </div>
      );
    } else {
      message = (
        <div className="alert alert-danger" role="alert">
          <p>{'Premlad si za dejtanje, daj se odi igrati s lego kockama ili nešto.'}</p>
        </div>
      );
    }

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

        {message}
      </div>
    );
  }
});
