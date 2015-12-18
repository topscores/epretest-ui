'use strict';

var React = require('react');

var SectionTitle = React.createClass({
  render: function() {
    return (
      <div className="section-title">
        <div className="section-name">{this.props.name}</div>
        <div className="section-description">{this.props.description}</div>
      </div>
    );
  }
});

module.exports = SectionTitle;
