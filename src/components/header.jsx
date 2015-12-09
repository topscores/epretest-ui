'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">
              <img className="logo-img" alt="e-pretest" src="img/logo.png" />
            </a>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Header;
