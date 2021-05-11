import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import awsExports from "./aws-exports";
import Auth from "@aws-amplify/auth";
import Container from "react-bootstrap/Container";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import BpNav from "./BpNav";
import { Col } from "react-bootstrap";

import CheckoutForm from "./CheckoutForm";
Amplify.configure(awsExports);

const promise = loadStripe(
  "pk_test_51IbMlrGRleJE8Th4SKn0HD8NCsGgf9sSuXFytfKvyOwTmsZDbiFdI4qKy5qIZ2seGND9ViIRz40DKF2jRe7s8zR600wDxb6CdM"
);

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
function PayBill() {
  const [planDetails, setPlanDetails] = useState(planProps);
  useEffect(() => {
    fetchPlans();
  }, []);
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
  return (
    <Container fluid>
      <BpNav />
      <div class="jumbotron row justify-content-center">
        <div class="col-sm">
          <h2>Amount: €{planDetails.costPerMonth}</h2>
        </div>
      </div>
      <div>
        <div class="card-body">
          <div>
            <Elements stripe={promise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PayBill;
