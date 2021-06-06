import React, { useEffect, useState, useRef } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import { Col } from "react-bootstrap";
import awsExports from "./aws-exports";
import Auth from "@aws-amplify/auth";
import Container from "react-bootstrap/Container";
import BpNav from "./BpNav";
import Paypal from "./Paypal";

Amplify.configure(awsExports);

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
  const [checkout, setCheckout] = useState(false);

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
      <div class="jumbotron Col justify-content-center"></div>

      <div
        style={{
          color: "white",
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        class=" row align-items-center"
      >
        <div class=" col-lg-8">
          <div class="card text-dark  mb-3">
            <div class="card-body">
              <div class="col-sm">
                <h2>Total: €{planDetails.costPerMonth}</h2>
              </div>
              {checkout ? (
                <Paypal />
              ) : (
                <button
                  onClick={() => {
                    setCheckout(true);
                  }}
                  class="btn btn-primary btn-lg active"
                >
                  Pay
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PayBill;
