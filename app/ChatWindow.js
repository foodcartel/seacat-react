import React from 'react';
import Socket from 'socket.io-client';
import ChatWindowHeader from './ChatWindowHeader';
import ChatPane from './ChatPane';
import UserList from './UserList';
import InputBar from './InputBar';

class ChatWindow extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
     this.socket = Socket.connect('http://127.0.0.1:3000');
  }

  render() {
    return (
      <div id="ChatWindow">
        <ChatWindowHeader></ChatWindowHeader>
        <div className="chatContainer">
          <UserList/>
          <ChatPane typing={this.state.typing} messages={this.state.messages} />
        </div>
        <InputBar onMessageSubmit={this.handleMessageSubmit} onTyping={this.handleInputChanged} />
      </div>
    );
  }
}

module.exports = ChatWindow;
