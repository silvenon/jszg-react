import React from 'react/addons';

let App = React.createClass({
  propTypes: {},

  render() {
    return (
      <div className="container">
        <h1>{'\'Sup'}</h1>
      </div>
    );
  }
});

React.render(<App />, document.getElementById('content'));
