import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function login() {
  return (
    <Container fluid>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/CustomerDashboard">
          TelecomsCorp
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <div class="btn-group float-right">
          <a
            href="/admin"
            class="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Admin
          </a>
        </div>
      </nav>

      <Row className="">
        <div class="wall col-5">
          <Col>
            <h1 class="row justify-content-center">Welcome</h1>
            <div class="jumbotron  vertical-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
        </div>

        <Col class="row justify-content-center">
          <div class="jumbotron vertical-center row justify-content-center">
            <Form class="form-inline">
              <label class="row justify-content-center">
                <h1>Log In</h1>
              </label>
              <Form.Group controlId="formBasicEmail">
                <Form.Label class="row justify-content-center">
                  Username
                </Form.Label>
                <Form.Control type="username" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label class="row justify-content-center">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  class="row justify-content-center"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox"></Form.Group>
              <div class="row justify-content-center">
                <div class="btn-group float-right">
                  <a
                    href="/CustomerDashboard"
                    class="btn btn-primary btn-lg active"
                    role="button"
                    aria-pressed="true"
                  >
                    Login
                  </a>
                </div>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default login;
