import React from 'react';
import { Row, Col } from 'react-bootstrap';

const NavigationBar = () =>
  <Row id="NavigationBar">
    <Col xsPull={1} lgPull={1}>
      <img alt="seacat-logo" className="logo-img" src="../assets/seacat-logo.png" />
    </Col>
    <Col xsPull={1} lgPull={1}>
      <h1 className="navbar-h1">Seacat</h1>
    </Col>
  </Row>;

export default NavigationBar;
