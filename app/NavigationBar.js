var React = require('react');
var NavigationBar = React.createClass({
	render: function() {
		return (
		<div id="NavigationBar">
      <div id="logo" class="container">
      <a href="#">Seacat App</a>
      </div>
		</div>
		);
	}
});

module.exports = NavigationBar;
