import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import Sockets from './socket';
import { AddNewMessage } from './actions/messages';
import ChatMessage from './ChatMessage';

const mapStateToProps = (state = {}) => {
  return { ...state };
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
    const { dispatch, messages } = this.props;
    return (
      <Grid fluid={true} id="ChatPane">
        { messages.map((message, index) =>
          <ChatMessage key={index} message={message} />) /* eslint-disable-line no-array-index-key */
        }
      </Grid>
    );
  }
}

module.exports = connect(mapStateToProps)(ChatPane);
