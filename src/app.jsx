'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./components/header');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Header />
        <h1>Hello, world</h1>
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('.react-root'));
