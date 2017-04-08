import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Sockets from './socket';
import { AddNewMessage } from './actions/messages';
import ChatMessage from './ChatMessage';

const mapStateToProps = (state = {}) => {
  const s = { ...state };
  return s;
};

class ChatPane extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = this.props.dispatch;
    this.sockets = new Sockets();
  }

  componentDidMount() {
    this.sockets.recieveMessage(this.handleMessageRecieved);
  }

  handleMessageRecieved = (event) => {
    this.dispatch(AddNewMessage(event.data));
  }

  render() {
    const { messages } = this.props;
    return (
      <Grid id="ChatPane">
        { messages.map((message, index) => // @TODO need to add counter to reducer to shut up this lint issue
          <ChatMessage key={index} message={message} />) /* eslint-disable-line no-array-index-key */
        }
      </Grid>
    );
  }
}

ChatPane.propTypes = {
  dispatch: PropTypes.func,
  messages: PropTypes.shape(
    { message: PropTypes.string },
  ),
};

ChatPane.defaultProps = { messages: [] };


module.exports = connect(mapStateToProps)(ChatPane);
