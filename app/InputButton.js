var React = require('react');

class InputButton extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  handleHover() {}

  render() {
    return (
      <div id="InputButton" onClick={this.handleClick} />
    );
  }
}

module.exports = InputButton;
