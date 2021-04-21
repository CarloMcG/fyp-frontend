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

import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51IbMlrGRleJE8Th4SKn0HD8NCsGgf9sSuXFytfKvyOwTmsZDbiFdI4qKy5qIZ2seGND9ViIRz40DKF2jRe7s8zR600wDxb6CdM"
);
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
      <div class="jumbotron  justify-content-center">
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      </div>
    </Container>
  );
}

export default PayBill;
