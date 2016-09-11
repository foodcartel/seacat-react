var React = require('react');
var InputButton = require('./InputButton');

class InputBar extends React.Component {
	constructor(props) {
		super();
		this.inputClicked = this.inputClicked.bind(this);
		this.inputChanged = this.inputChanged.bind(this);
	}
	inputChanged(event) {
		this.setState({ message: event.target.value});
		this.props.onTyping(event.target.value);
	}
	inputClicked(event) {
		this.props.onMessageSubmit(event);
		this.refs.messageInput.value = '';
	}
	render() {
		return (
			<div id="InputBar">
	      <form id="MessageForm">
					<label className="input-inner-label" htmlFor="message">Message: </label>
					<input type="text" ref="messageInput" name="message" onChange={this.inputChanged} />
					<InputButton onPressed={this.inputClicked} />
				</form>
			</div>
		);
	}
}

module.exports = InputBar;
