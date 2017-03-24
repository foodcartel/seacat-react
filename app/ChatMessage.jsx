import React from 'react';

const ChatMessage = ({ message }) =>
  <div id="ChatMessage">
    <h4 className="chat-message-user-name">Chad Marciniak:</h4>
    <p className="chat-message-text">{message}</p>
  </div>;
ChatMessage.propTypes = { message: React.PropTypes.string };
ChatMessage.defaultProps = { message: 'Hello Friend...' };

export default ChatMessage;
