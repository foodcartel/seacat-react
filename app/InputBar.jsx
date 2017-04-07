import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import Sockets from './socket';
import InputButton from './InputButton';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.sockets = new Sockets();
    this.state = {
      message: '',
    };
  }

  inputChanged = (event) => {
    const msg = event.target.value;
    this.setState({ message: msg });
    this.sockets.detectChange(msg);
  }

  inputClicked = () => {
    if (this.state.message !== '') {
      this.sockets.submitMessage(this.state.message);
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
          <FormGroup className="inline-form-group">
            <Col xs={2} sm={1} className="input-inner-label"componentClass={ControlLabel}>Message: </Col>
            <Col xs={9} sm={10} className="inputBarTextContainer">
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
module.exports = connect()(InputBar);
