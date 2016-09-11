const React = require('react');
const ChatMessage = require('./ChatMessage');
class ChatPane extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let typingSpan;

		return (
			<div id="ChatPane">
				{this.props.messages.map(function(message, index){
									 return <ChatMessage key={index} message={message}/>;
				})}
			</div>
		);
	}
}

module.exports = ChatPane;
