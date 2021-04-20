import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import AdminNav from "./AdminNav";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Plans = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  async function fetchPlans() {
    try {
      const planData = await API.graphql(graphqlOperation(listPlans));
      const plans = planData.data.listPlans.items;
      setPlans(plans);
    } catch (error) {
      console.log("error fetching plans", Error);
    }
  }

  return (
    <Container fluid>
      <AdminNav />
      <div class="btn-group float-left">
        <a
          href="/AddToPlan"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Add a user to an existing plan
        </a>
      </div>
      <div class="btn-group float-right">
        <a
          href="/NewPlan"
          class="btn btn-primary btn-lg active"
          role="button"
          aria-pressed="true"
        >
          Create a New Plan
        </a>
      </div>
      <Col>
        <div class="jumbotron justify-content-center">
          <Row>
            <table class="table table-bordered" data-pagination="true">
              <thead>
                <tr>
                  <th scope="col">Plan ID</th>
                  <th scope="col">Plan Type</th>
                  <th scope="col">Plan Mobile Minutes</th>
                  <th scope="col">Plan Mobile Rate</th>
                  <th scope="col"> Landline Minutes</th>
                  <th scope="col"> Landline Rate</th>
                  <th scope="col"> International Minutes</th>
                  <th scope="col"> International Rate</th>
                  <th scope="col"> Premium Minutes</th>
                  <th scope="col"> Premium Rate</th>
                  <th scope="col"> Cost Per Month</th>
                </tr>
              </thead>
              {plans.map((plan, index) => (
                <tbody>
                  <tr key={plan.id ? plan.id : index}>
                    <td colspan="1">{plan.id}</td>
                    <td colspan="1">{plan.planType}</td>
                    <td colspan="1">{plan.mobileMinutes}</td>
                    <td colspan="1">{plan.mobileRate}</td>
                    <td colspan="1">{plan.landlineMinutes}</td>
                    <td colspan="1">{plan.landlineRate}</td>
                    <td colspan="1">{plan.internationalMinutes}</td>
                    <td colspan="1">{plan.internationalRate}</td>
                    <td colspan="1">{plan.premiumMinutes}</td>
                    <td colspan="1">{plan.premiumRate}</td>
                    <td colspan="1">{plan.costPerMonth}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </Row>
        </div>
      </Col>
    </Container>
  );
};

export default Plans;
