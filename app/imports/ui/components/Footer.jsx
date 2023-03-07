import React from 'react';
import { Row, Col, Button, InputGroup, ButtonToolbar, Form, Container } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer>
    <Container>
      <Row className="pt-4">
        <Col>
          NAVIGATION
          <hr />
          <div>About Us</div>
          <div>Employment</div>
          <div>About Us</div>
        </Col>
        <Col>
          MAIN MENU
          <hr />
          <div>Men</div>
          <div>Women</div>
          <div>Kids</div>
        </Col>
        <Col>
          Connect
          <hr />
          <div>Sign up for latest updates</div>
          <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
          >
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Enter Email Address"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
              />
              <Button variant="dark">Join</Button>
            </InputGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    </Container>
  </footer>

);

export default Footer;
