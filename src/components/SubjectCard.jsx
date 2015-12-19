var React = require('React');

var SubjectCard = React.createClass({
  render: function() {
    return (
      <div className="col-lg-4 col-lg-4 col-sm-6 col-xs-1">
        <div className="subject-card">
          <img src={this.props.img} />
          <div className="subject-name">{this.props.name}</div>
        </div>
      </div>
    );
  }
});

module.exports = SubjectCard;
