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
          <div className="title highlight">Practices make perfect</div>
          <div className="subtitle">เตรียมความพร้อมก่อนเข้าสนามสอบ ด้วยข้อสอบพร้อมเฉลยกว่า 10,000 ข้อ</div>
          <div className="free-try">
            <input className="btn btn-primary -text-xlarge" type="button" value="ทำข้อสอบฟรี" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Header;
