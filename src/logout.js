import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function logout() {
  return (
    <Container fluid>
      <div class="btn-group float-right">
        <a
          href="/"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Logout
        </a>
      </div>
    </Container>
  );
}
