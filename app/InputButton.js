var React = require('react');
class InputButton extends React.Component {
		constructor(props) {
			super();
			this.inputClicked = this.inputClicked.bind(this);
		}
		inputClicked(event) {
			console.log('clicked this shit');
	    this.props.onPressed(event);
		}

		render() {
			return (
				<div id="InputButton" onClick={this.inputClicked}></div>
			);
		}
}

module.exports = InputButton;
