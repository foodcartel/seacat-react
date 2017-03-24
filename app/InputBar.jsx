import React from 'react';
import InputButton from './InputButton';

class InputBar extends React.Component {
  inputChanged = (event) => {
    if (event.target.value !== '') {
      this.setState({ message: event.target.value });
    }
    this.props.onTyping(event.target.value);
  }

  inputClicked = (event) => {
    if (this.messageInput.value !== '') {
      this.props.onMessageSubmit(event);
      this.messageInput.value = '';
    }
  }

  keyPressed = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.inputClicked();
    }
  }

  inputFocus = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div id="InputBar">
        <form id="MessageForm">
          <span>
            <label className="input-inner-label" htmlFor="message">Message: </label>
            <input type="text" ref={(c) => { this.messageInput = c; }} name="message" autoComplete="off" onFocus={this.inputFocus} onChange={this.inputChanged} onKeyDown={this.keyPressed} />
            <InputButton onPressed={this.inputClicked} />
          </span>
        </form>
      </div>
    );
  }
}

InputBar.propTypes = {
  onTyping: React.PropTypes.func.isRequired,
  onMessageSubmit: React.PropTypes.func.isRequired,
};

module.exports = InputBar;
