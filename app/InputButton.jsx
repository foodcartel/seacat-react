import React from 'react';

class InputButton extends React.Component {
  constructor() {
    super();
    this.inputClicked = this.inputClicked.bind(this);
  }

  inputClicked = (event) => {
    event.preventDefault();
    console.log('inputClicked: ', event);
    this.props.onPressed(event);
  }

  render() {
    return (
      <button id="InputButton" onClick={this.inputClicked} />
    );
  }
}

InputButton.propTypes = {
  onPressed: React.PropTypes.func.isRequired,
};
module.exports = InputButton;
