var React = require('react');
var InputBar = React.createClass({

	inputChanged: function(event) {
		 this.props.onTyping(event.target.value); 
	},

	render: function() {
		return (
		<div id="InputBar">
      <form id="MessageForm">
			 <label className="input-inner-label" htmlFor="message">Message: </label>
				<input type="text" name="message" onChange={this.inputChanged}/>
			</form>
		</div>
		);
	}
});

module.exports = InputBar;
