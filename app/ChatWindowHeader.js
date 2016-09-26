import React from 'react';

class ChatWindowHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Chat Window',
    }
  }
  render() {
    return (
      <div id="ChatWindowHeader">
        <h3>{this.state.title}</h3>
      </div>
    );
  }
}

module.exports = ChatWindowHeader;