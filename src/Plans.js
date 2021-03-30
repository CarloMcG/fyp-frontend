import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function plans() {
  return (
    <Container fluid>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/CustomerDashboard">
          TelecomsCorp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/AdminDashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/Plans">
                Bills<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="btn-group float-right">
          <a
            href="/"
            class="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            logout
          </a>
        </div>
      </nav>
      <div class="btn-group float-left">
        <a
          href="/AddToPlan"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Add a user to an existing plan
        </a>
      </div>
      <div class="btn-group float-right">
        <a
          href="/NewPlan"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Create a New Plan
        </a>
      </div>
      <Col>
        <div class="jumbotron justify-content-center">
          <Row>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Plan ID</th>
                  <th scope="col">LandLine Rate Per Minute</th>
                  <th scope="col">Mobile Rate Per Minute</th>
                  <th scope="col">International Rate Per Minute</th>
                  <th scope="col">Premium Rate Per Minute</th>
                  <th scope="col">Number of Active Users</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </Row>
        </div>
      </Col>
    </Container>
  );
}

export default plans;
