import React from 'react';
import Socket from 'socket.io-client';
import NavigationBar from './NavigationBar';
import ChatPane from './ChatPane';
import InputBar from './InputBar';


class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      message: '',
      messages: ['hello friend...'],
      typing: false,
    };
  }
  componentDidMount() {
    this.socket = Socket.connect('http://127.0.0.1:3000');
    this.socket.on('message-sent', this.handleMessageRecieved);
  }
  handleInputChanged = (event) => {
    this.setState({ message: event });
    this.socket.emit('typing', { data: event });
    this.setState({ typing: true });
  }
  handleMessageSubmit = () => {
    if (this.state.message !== '') this.socket.emit('message-submit', { data: this.state.message });
  }
  handleMessageRecieved = (event) => {
    const change = this.state.messages;
    change.push(event.data);
    this.setState({ messages: change });
  }
  render() {
    return (
      <div id="appComponent">
        <NavigationBar />
        <div className="chatContainer">
          <ChatPane typing={this.state.typing} messages={this.state.messages} />
        </div>
        <InputBar onMessageSubmit={this.handleMessageSubmit} onTyping={this.handleInputChanged} />
      </div>
    );
  }
}

module.exports = AppComponent;
