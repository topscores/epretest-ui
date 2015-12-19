'use strict';

var React = require('react');

var ExamCard = React.createClass({
  render: function() {
    return (
      <div className="exam-card">
        <div className="tag">{this.props.tag}</div>
      </div>
    );
  }
});

module.exports = ExamCard;
