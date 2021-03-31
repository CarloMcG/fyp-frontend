import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Line, Circle } from "rc-progress";

function aDashboard() {
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
              <a class="nav-link active" href="/AdminDashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Users">
                Users<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/Plans">
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
      <div class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <div class="card-group ">
            <div class="card ">
              <h6 class="card-header">Users:</h6>
              <div class="card-body ">
                <h1 class="card-text row justify-content-center">120</h1>
                <h6 class="card-text row justify-content-center">
                  Current Users
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">PrePay Plans:</h6>
              <div class="card-body">
                <h1 class="card-text row justify-content-center">36</h1>
                <h6 class="card-text row justify-content-center">
                  Active PrePay Plans
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">BillPay Plans:</h6>
              <div class="card-body">
                <h1 class="card-text row justify-content-center">46</h1>
                <h6 class="card-text row justify-content-center">
                  Active BillPay Plans
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header ">Minutes Used this month:</h6>
              <div class="card-body">
                <h1 class="card-text row justify-content-center">3600</h1>
                <h6 class="card-text row justify-content-center">
                  Minutes used
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default aDashboard;
