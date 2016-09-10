var React = require('react');
var NavigationBar = React.createClass({
	render: function() {
		return (
		<div id="NavigationBar">
      <img className="logo-img" src="../assets/seacat-logo.png"/>
			<h1>Seacat</h1>
		</div>
		);
	}
});

module.exports = NavigationBar;
