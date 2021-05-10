import React from "react";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import PpNav from "./PpNav";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51IbMlrGRleJE8Th4SKn0HD8NCsGgf9sSuXFytfKvyOwTmsZDbiFdI4qKy5qIZ2seGND9ViIRz40DKF2jRe7s8zR600wDxb6CdM"
);
function topup() {
  return (
    <Container fluid>
      <PpNav />
      <Col class="jumbotron row justify-content-center">
        <div class=" row justify-content-center">
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
          </Form>
        </div>
        <div>
          <Elements stripe={promise}>
            <CheckoutForm />
          </Elements>
        </div>
      </Col>
    </Container>
  );
}

export default topup;
