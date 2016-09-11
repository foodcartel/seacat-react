const React = require('react');
const ChatMessage = require('./ChatMessage');
class ChatPane extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="ChatPane">
				{this.props.messages.map(function(message, index){
									 return <ChatMessage key={index} message={message}/>;
								 })}
						<span>{this.props.typing}Is typing</span>
					 </div>
		);
	}
}

module.exports = ChatPane;
