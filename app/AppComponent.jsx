import React from 'react';
import Socket from 'socket.io-client';
import { Grid } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import ChatPane from './ChatPane';
import InputBar from './InputBar';


class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      messages: ['hello friend...'],
    };
  }
  componentDidMount() {
    this.socket = Socket.connect('http://127.0.0.1:3000');
    this.socket.on('message-sent', this.handleMessageRecieved);
  }


  handleMessageRecieved = (event) => {
    console.log('handleMessageRecieved: ', event);
    const change = this.state.messages;
    change.push(event.data);
    this.setState({ messages: change });
  }
  render() {
    return (
      <Grid id="appComponent">
        <NavigationBar />
        <ChatPane typing={this.state.typing} messages={this.state.messages} />
        <InputBar />
      </Grid>
    );
  }
}

module.exports = AppComponent;
