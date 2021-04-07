import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function transactions() {
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
            <li class="nav-item ">
              <a class="nav-link" href="/PrePayDashboard">
                Dashboard<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/Transactions">
                Transactions
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/TopUp">
                TopUp
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
      <Col>
        <div class="jumbotron justify-content-center">
          <Row>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"> Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Download</th>
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

export default transactions;
