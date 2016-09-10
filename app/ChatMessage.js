var React = require('react');
var ChatMessage = React.createClass({
	render: function() {
		return (
		<div id="ChatMessage">
      <h4 className="chat-message-user-name"></h4>
      <p className="chat-message-text"></p>
		</div>
		);
	}
});

module.exports = ChatMessage;
