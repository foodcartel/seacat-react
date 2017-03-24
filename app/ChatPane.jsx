import React from 'react';
import ChatMessage from './ChatMessage';

const ChatPane = ({ messages }) =>
(
  <div id="ChatPane">
    {messages.map((message, index) =>
      <ChatMessage key={index} message={message} />) /* eslint-disable-line no-array-index-key */ }
  </div>
);

ChatPane.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.string),
};

ChatPane.defaultProps = { messages: {} };

export default ChatPane;
