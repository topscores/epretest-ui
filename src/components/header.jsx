'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Navbar  = require('./navbar');

var navItems = [
  {href: '#', title: 'ข้อสอบ'},
  {href: '#', title: 'ราคา'},
];

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar navItems={navItems}/>
      </div>
    );
  }
});

module.exports = Header;
