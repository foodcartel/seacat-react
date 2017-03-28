import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Socket from 'socket.io-client';
import InputButton from './InputButton';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.socket = Socket.connect('http://127.0.0.1:3000');
  }

  inputChanged = (event) => {
    const msg = event.target.value;
    this.setState({ message: msg });
    this.socket.emit('typing', { data: msg });
  }

  inputClicked = () => {
    if (this.state.message !== '') {
      console.log('msg state: ', this.state.message);
      this.socket.emit('message-submit', { data: this.state.message });
      this.setState({ message: '' });
    }
  }

  keyPressed = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.inputClicked();
    }
  }

  render() {
    return (
      <Row id="InputBar">
        <Form horizontal id="MessageForm">
          <FormGroup>
            <Col xs={2} sm={1} className="input-inner-label"componentClass={ControlLabel}>Message: </Col>
            <Col xs={9} sm={10}>
              <FormControl
                className="inputBarText"
                type="text"
                name="message"
                autoComplete="off"
                value={this.state.message}
                onChange={this.inputChanged}
                onKeyDown={this.keyPressed}
              />
            </Col>
            <Col xs={1}>
              <InputButton onPressed={this.inputClicked} />
            </Col>
          </FormGroup>
        </Form>
      </Row>
    );
  }
}

InputBar.propTypes = {};
module.exports = InputBar;
