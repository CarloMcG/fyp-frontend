import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function adminLogin() {
  return (
    <Container fluid>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/CustomerDashboard">
          TelecomsCorp
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <div class="btn-group float-right">
          <a
            href="/"
            class="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            User
          </a>
        </div>
      </nav>
      <div class="jumbotron vertical-center row justify-content-center">
        <Form>
          <label class="row justify-content-center">
            <h1>Log In</h1>
          </label>
          <Form.Group controlId="formBasicEmail">
            <Form.Label class="row justify-content-center">
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              class="row justify-content-center"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label class="row justify-content-center">Password</Form.Label>
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
                href="/AdminDashboard"
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
    </Container>
  );
}

export default adminLogin;
