import React from 'react';
import ChatPane from './ChatPane';
import UserList from './UserList';
import InputBar from './InputBar';

class ChatContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // users: {},
      // message: '',
      // messages: ['hello friend...'],
      // typing: false
    };
  }
  componentDidMount() {
    // this.socket = Socket.connect('http://127.0.0.1:3000');
    // this.socket.on('message-sent', this.handleMessageRecieved);
  }

  render() {
    return (
      <div id="appComponent">
        <div className="chatContainer">
          <UserList/>
          <ChatPane typing={this.state.typing} messages={this.state.messages} />
        </div>
        <InputBar onMessageSubmit={this.handleMessageSubmit} onTyping={this.handleInputChanged} />
      </div>
    );
  }
}

module.exports = ChatContainer;
