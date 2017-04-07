import React from 'react';
import { Grid } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import ChatPane from './ChatPane';
import InputBar from './InputBar';


class ChatWindow extends React.Component {
  render() {
    return (
      <Grid className="chatWindow">
        <NavigationBar />
        <ChatPane />
        <InputBar />
      </Grid>
    );
  }
}

module.exports = ChatWindow;
