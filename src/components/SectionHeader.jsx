'use strict';

var React = require('react');

var SectionTitle = React.createClass({
  render: function() {
    return (
      <div className="section-header">
        <div className="title">{this.props.name}</div>
        {this.props.descriptions.map(function(description) {
          return <div className="subtitle">{description}</div>
        })}
      </div>
    );
  }
});

module.exports = SectionTitle;
