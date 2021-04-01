import React from "react";
import Container from "react-bootstrap/Container";
import { Circle } from "rc-progress";

function PrePayDashboard() {
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
            <li class="nav-item active">
              <a class="nav-link" href="/PrePayDashboard">
                Dashboard<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Transactions">
                Transactions
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/TopUp">
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
      <h1 class="float-left">Hello, $User</h1>

      <div class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <div class="card-group ">
            <div class="card">
              <h6 class="card-header">Current Balance:</h6>
              <div class="card-body">
                <h1>€100.00</h1>
              </div>
            </div>
            <div class="card ">
              <h6 class="card-header">Mobile Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">Landline Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">International Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">Premium Rate Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PrePayDashboard;
