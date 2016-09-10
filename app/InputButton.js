var React = require('react');

var InputButton = React.createClass({

	inputClicked: function(event) {
		console.log('clicked this shit');
    this.props.onPressed(event);
	},

	render: function() {
		return (
		<div id="InputButton" onClick={this.inputClicked}></div>
		);
	}
});

module.exports = InputButton;
