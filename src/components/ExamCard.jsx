'use strict';

var React = require('react');

var ExamCard = React.createClass({
  render: function() {
    return (
      <div>{this.props.exam.name}</div>
    );
  }
});

module.exports = ExamCard;
