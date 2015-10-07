import React from 'react/addons';
import Calculator from './calculator';

let App = React.createClass({
  propTypes: {},

  render() {
    return (
      <div className="container">
        <Calculator />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));
