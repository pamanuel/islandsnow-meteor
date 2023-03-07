import React from 'react';
import { Col, Row, NavDropdown } from 'react-bootstrap';

const SecondMenu = () => (

  <Row className="justify-content-lg-center pt-4">
    <Col />
    <Col><NavDropdown title="Kid's" /></Col>
    <Col><NavDropdown title="Men's" /></Col>
    <Col><NavDropdown title="Women's" /></Col>
    <Col><NavDropdown title="Brands" /></Col>
    <Col>Search</Col>
    <Col />
  </Row>
);
export default SecondMenu;
