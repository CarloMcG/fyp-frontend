import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import awsExports from "./aws-exports";
import Auth from "@aws-amplify/auth";
import Container from "react-bootstrap/Container";

import PpNav from "./PpNav";
import { Col, Form } from "react-bootstrap";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
Amplify.configure(awsExports);

const stripePromise = loadStripe(
  "pk_test_51IbMlrGRleJE8Th4SKn0HD8NCsGgf9sSuXFytfKvyOwTmsZDbiFdI4qKy5qIZ2seGND9ViIRz40DKF2jRe7s8zR600wDxb6CdM"
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const initialState = {
  Mobile: "",
  Landline: "",
  Int: "",
  Prem: "",
};

const planProps = {
  id: "",
  planType: "",
  mobileMinutes: "",
  mobileRate: "",
  landlineMinutes: "",
  landlineRate: "",
  internationalMinutes: "",
  internationalRate: "",
  premiumMinutes: "",
  premiumRate: "",
  costPerMonth: "",
  Users: "",
};

const Topup = () => {
  const [formState, setFormState] = useState(initialState);
  const [planDetails, setPlanDetails] = useState(planProps);
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    fetchPlans();
  }, []);
  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }
  async function fetchPlans() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const name = user.signInUserSession.accessToken.payload["username"];
      let filter = {
        Users: {
          contains: name,
        },
      };
      const planData = await API.graphql(
        graphqlOperation(listPlans, { filter: filter })
      );
      const plan = planData.data.listPlans.items[0];
      console.log(plan);
      if (plan) {
        setPlanDetails(plan);
      }
    } catch (error) {
      console.log("error fetching plans", error);
    }
  }
  async function addTotal() {
    try {
      if (!formState.Mobile || !formState.Landline) return;
      const order = { ...formState };
      setOrders([...orders, order]);

      const mobTot = order.Mobile * planDetails.mobileRate;
      const landTot = order.Landline * planDetails.landlineRate;
      const intTot = order.Int * planDetails.internationalRate;
      const premTot = order.Prem * planDetails.premiumMinutes;
      total[0] = mobTot + landTot + intTot + premTot;

      console.log(setTotal);
    } catch (error) {
      console.log("Error adding user to plan", error);
    }
  }

  const handleClick = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
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
                onChange={(event) => setInput("Mobile", event.target.value)}
                value={formState.Users}
                placeholder="Mobile"
                class="form-control form-fixer m-1"
              ></input>
            </div>
            <div class="form-inline form-group">
              <label class="fLabel">LandLine Minutes</label>
              <input
                type="number"
                onChange={(event) => setInput("Landline", event.target.value)}
                value={formState.Users}
                placeholder="LandLine"
                class="form-control form-fixer m-1"
              ></input>
            </div>{" "}
            <div class="form-inline form-group">
              <label class="fLabel">International Minutes</label>
              <input
                type="number"
                onChange={(event) => setInput("Int", event.target.value)}
                value={formState.Users}
                placeholder="International"
                class="form-control form-fixer m-1"
              ></input>
            </div>{" "}
            <div class="form-inline form-group">
              <label class="fLabel">Premium Minutes</label>
              <input
                type="number"
                onChange={(event) => setInput("Prem", event.target.value)}
                value={formState.Users}
                placeholder="Premium"
                class="form-control form-fixer m-1"
              ></input>
            </div>
            <button
              type="button"
              onClick={addTotal}
              class="btn btn-primary btn-lg  float-right"
            >
              Add Total
            </button>
          </Form>
        </div>

        <div>
          <h3 class="card-header">Total Cost: €{total[0]}</h3>
          <h1></h1>
          <h1></h1>
          <div class="card-body">
            <div>
              <button
                onClick={handleClick}
                class="btn btn-primary btn-lg active float-right"
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </Col>
    </Container>
  );
};

export default Topup;
