'use strict';

var React = require('react');

var ExamCard = React.createClass({
  render: function() {
    return (
      <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <div className="exam-card">
          <div className="tag">{this.props.tag}</div>
          <div className="info">
            <div className="name">{this.props.name}</div>
            <div className="description">{this.props.description}</div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ExamCard;
