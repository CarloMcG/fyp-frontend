import React from "react";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import PpNav from "./PpNav";
function topup() {
  return (
    <Container fluid>
      <PpNav />
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
