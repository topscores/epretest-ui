'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Navbar  = require('./navbar');

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar navItems={this.props.navItems} />
        <div className="splash">
          <h1>Practices make perfect</h1>
          <h3>เตรียมความพร้อมก่อนเข้าสนามสอบ ด้วยข้อสอบพร้อมเฉลยกว่า 10,000 ข้อ</h3>
          <div className="free-try">
            <input className="btn btn-primary -text-xlarge" type="button" value="ทำข้อสอบฟรี" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
