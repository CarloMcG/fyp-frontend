import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import awsExports from "./aws-exports";
import AdminNav from "./AdminNav";

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
const ADashboard = () => {
  const [plans, setPlans] = useState([]);
  const [count, setCount] = useState([]);

  async function fetchPlans() {
    try {
      const planData = await API.graphql(graphqlOperation(listPlans));
      const plans = planData.data.listPlans.items;
      setPlans(plans);
      var bp = 0;
      var pp = 0;
      var u = 0;

      var i;
      for (i = 0; i < plans.length; i++) {
        if (plans[i].planType == "Billpay") {
          bp = bp + 1;
        } else if (plans[i].planType == "Prepay") {
          pp = pp + 1;
        }
      }
      count[0] = bp;
      count[1] = pp;
    } catch (error) {
      console.log("error fetching plans", Error);
    }
  }

  return (
    <Container fluid>
      <AdminNav onLoad={fetchPlans()} />
      <div class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <div class="card">
            <h6 class="card-header">PrePay Plans:</h6>
            <div class="card-body">
              <h1 class="card-text row justify-content-center">{count[1]}</h1>
              <h6 class="card-text row justify-content-center">
                Active PrePay Plans
              </h6>
            </div>
          </div>

          <div class="card">
            <h6 class="card-header">BillPay Plans:</h6>
            <div class="card-body">
              <h1 class="card-text row justify-content-center">{count[0]}</h1>
              <h6 class="card-text row justify-content-center">
                Active BillPay Plans
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ADashboard;
