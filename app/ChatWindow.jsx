import React from 'react';
import { Grid } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import ChatPane from './ChatPane';
import InputBar from './InputBar';

const ChatWindow = () =>
  <Grid className="chatWindow">
    <NavigationBar />
    <ChatPane />
    <InputBar />
  </Grid>;

export default ChatWindow;
