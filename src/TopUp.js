import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function topup() {
  return (
    <Container>
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
              <a class="nav-link " href="/Transactions">
                Transactions
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/TopUp">
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
      <Col class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <Form class="form-inline text-center">
            <div class="form-inline form-group">
              <label class="fLabel">Mobile Minutes</label>
              <input
                type="number"
                id="uID"
                placeholder="Mobile"
                class="form-control form-fixer m-1"
              ></input>
            </div>
            <div class="form-inline form-group">
              <label class="fLabel">LandLine Minutes</label>
              <input
                type="number"
                id="uID"
                placeholder="LandLine"
                class="form-control form-fixer m-1"
              ></input>
            </div>{" "}
            <div class="form-inline form-group">
              <label class="fLabel">International Minutes</label>
              <input
                type="number"
                id="uID"
                placeholder="International"
                class="form-control form-fixer m-1"
              ></input>
            </div>{" "}
            <div class="form-inline form-group">
              <label class="fLabel">Premium Minutes</label>
              <input
                type="number"
                id="uID"
                placeholder="Premium"
                class="form-control form-fixer m-1"
              ></input>
            </div>
            <h3> Total Cost: €XX.XX</h3>
            <Form.Group controlId="cardNumber">
              <Form.Control
                type="text"
                placeholder="Card Number"
                class="row justify-content-center"
              />
            </Form.Group>
            <Form.Group controlId="cardHolder">
              <Form.Control
                type="text"
                placeholder="Card Holder"
                class="row justify-content-center"
              />
            </Form.Group>
            <Form.Group controlId="expDate">
              <Form.Control
                type="month"
                placeholder="Exp Date"
                class="row justify-content-center"
              />
            </Form.Group>
            <Form.Group controlId="cvv">
              <Form.Control
                type="text"
                placeholder="cvv"
                class="row justify-content-center"
              />
            </Form.Group>
            <div class="row justify-content-center">
              <div class="btn-group float-right">
                <a
                  href="/CustomerDashboard"
                  class="btn btn-primary btn-lg active"
                  role="button"
                  aria-pressed="true"
                >
                  Pay With Stripe
                </a>
              </div>
            </div>
          </Form>
        </div>
      </Col>
    </Container>
  );
}

export default topup;
