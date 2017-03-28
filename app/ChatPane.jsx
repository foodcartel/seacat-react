import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import ChatMessage from './ChatMessage';

const ChatPane = ({ messages }) =>
(
  <Grid fluid={true} id="ChatPane">
    {messages.map((message, index) =>
      <ChatMessage key={index} message={message} />) /* eslint-disable-line no-array-index-key */ }
  </Grid>
);

ChatPane.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.string),
};

ChatPane.defaultProps = { messages: {} };

export default ChatPane;
