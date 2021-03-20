import React from "react";
import "./styles/Footer.css";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => (
  <footer>
    <Container className="footer" fluid={true}>
      <Row>
        <Col xl={12}>
          Copyright © 2021-{new Date().getFullYear()}{" "}
          <strong>Banu Akman</strong>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default Footer;