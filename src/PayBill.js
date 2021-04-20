import React from "react";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import BpNav from "./BpNav";

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

function PayBill() {
  return (
    <Container fluid>
      <BpNav />
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
                <Elements stripe={stripePromise}>
                  <CardElement />
                </Elements>
              </div>
            </div>
          </form>
        </Row>
      </div>
    </Container>
  );
}

export default PayBill;
