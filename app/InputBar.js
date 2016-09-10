var React = require('react');
var InputButton = require('./InputButton');
var InputBar = React.createClass({

	getInitalState() {
			return {message: ''};
	},

	inputChanged: function(event) {
		 this.props.onTyping(event.target.value);
	},

	inputClicked: function(event) {
		this.props.onPress('onpress');
	},

	render: function() {
		return (
		<div id="InputBar">
      <form id="MessageForm">
				<label className="input-inner-label" htmlFor="message">Message: </label>
				<input type="text" name="message" onChange={this.inputChanged}/>
				<InputButton onClick={this.inputClicked}/>
			</form>
		</div>
		);
	}
});

module.exports = InputBar;
