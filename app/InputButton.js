import React from 'react';

class InputButton extends React.Component {
		constructor(props) {
			super();
		}

		inputClicked = (event) => {
	    this.props.onPressed(event);
		}

		render() {
			return (
				<div id="InputButton" onClick={this.inputClicked}></div>
			);
		}
}

module.exports = InputButton;
