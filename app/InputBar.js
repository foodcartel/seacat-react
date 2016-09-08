var React = require('react');
var InputBar = React.createClass({
	render: function() {
		return (
		<div id="InputBar">
      <form id="MessageForm">
			 <label className="input-inner-label" htmlFor="message">Message: </label>
				<input type="text" name="message"/>
			</form>

		</div>
		);
	}
});

module.exports = InputBar;
