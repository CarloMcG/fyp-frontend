import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { AmplifySignOut } from "@aws-amplify/ui-react";
function PayBill() {
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
              <a class="nav-link" href="/CustomerDashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Bills">
                Bills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/PayBill">
                Pay a bill
              </a>
            </li>
          </ul>
        </div>
        <div class=" float-right">
          <AmplifySignOut />
        </div>
      </nav>
      <div class="jumbotron row justify-content-center">
        <div class="col-sm">
          <h2>Start Date: </h2>
        </div>
        <div class="col-sm">
          <h2>End Date: </h2>
        </div>
        <div class="col-sm">
          <h2>Amount: €</h2>
        </div>
      </div>
      <div class="jumbotron vertical-center row justify-content-center">
        <Row>
          <form>
            <label class="row justify-content-center">
              <h1>Pay a Bill</h1>
            </label>
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
          </form>
        </Row>
      </div>
    </Container>
  );
}

export default PayBill;
