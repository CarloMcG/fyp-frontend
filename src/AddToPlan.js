import React from "react";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function AddToPlan() {
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
              <a class="nav-link" href="/Users">
                Users<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/Plans">
                Plans<span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="btn-group float-right">
          <a
            href="/admin"
            class="btn btn-primary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            logout
          </a>
        </div>
      </nav>
      <Col class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <Form class="form-inline text-center">
            <div class="form-inline form-group">
              <label class="fLabel">User</label>
              <input
                type="text"
                id="uID"
                placeholder="User ID"
                class="form-control form-fixer m-1"
              ></input>
            </div>
            <div class="form-inline form-group">
              <label class="fLabel">Plan</label>
              <input
                type="text"
                id="uID"
                placeholder="Plan ID"
                class="form-control form-fixer m-1"
              ></input>
            </div>

            <div class="row justify-content-center">
              <div class="btn-group float-right">
                <a
                  href="/plans"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  Save Changes
                </a>
              </div>
            </div>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default AddToPlan;
