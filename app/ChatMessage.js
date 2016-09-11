var React = require('react');
class ChatMessage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div id="ChatMessage">
		<h4 className="chat-message-user-name">Chad Marciniak:</h4>
		<p className="chat-message-text">{this.props.message}</p>
		</div>
		);
	}
}

module.exports = ChatMessage;
