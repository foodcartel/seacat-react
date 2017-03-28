import React from 'react';
import ChatWindow from './ChatWindow';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      user: 'test user',
    };
  }

  render() {
    return (
      <ChatWindow />
    );
  }
}

module.exports = AppComponent;
