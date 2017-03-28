import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ChatMessage = ({ message }) =>
  <Row id="ChatMessage">
    <Col xs={12} lg={12}>
      <div className="chat-message-user-name">Chad Marciniak:</div>
      <p className="chat-message-text">{message}</p>
    </Col>
  </Row>;
ChatMessage.propTypes = { message: React.PropTypes.string };
ChatMessage.defaultProps = { message: 'Hello Friend...' };

export default ChatMessage;
