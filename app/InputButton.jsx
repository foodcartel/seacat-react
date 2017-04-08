import React from 'react';
import PropTypes from 'prop-types';

class InputButton extends React.Component {
  constructor() {
    super();
    this.inputClicked = this.inputClicked.bind(this);
  }

  inputClicked = (event) => {
    event.preventDefault();
    this.props.onPressed(event);
  }

  render() {
    return (
      <button id="InputButton" onClick={this.inputClicked} />
    );
  }
}

InputButton.propTypes = {
  onPressed: PropTypes.func.isRequired,
};

module.exports = InputButton;
