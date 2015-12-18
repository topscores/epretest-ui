var React = require('react');
var ReactDOM = require('react-dom');

Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-transparent">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">
              <img className="logo-img" alt="e-pretest" src="public/img/logo.png" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu-collapse">
            <ul className="nav navbar-nav navbar-right">
              {this.props.navItems.map(function(navItem) {
                return <li key={navItem.title}><a href={navItem.href}>{navItem.title}</a></li>
              })}
              <li key="signup"><a href="#"><input type="button" className="btn btn-primary -text-large" value="Sign up"/></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
