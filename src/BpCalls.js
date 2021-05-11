import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listCalls } from "./graphql/queries";
import BpNav from "./BpNav";
import { listPlans } from "./graphql/queries";
import { updateCalls } from "./graphql/mutations";
import Auth from "@aws-amplify/auth";

import awsExports from "./aws-exports";
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

const BpCalls = () => {
  const [calls, setCalls] = useState([]);
  const [plan, setPlan] = useState(planProps);
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    fetchPlan();
    fetchCalls();
  }, []);

  async function fetchPlan() {
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
      if (plan) {
        setPlan(plan);
      }
    } catch (error) {
      console.log("Error fetching Plan", error);
    }
  }

  async function fetchCalls() {
    try {
      const callData = await API.graphql(graphqlOperation(listCalls));
      const calls = callData.data.listCalls.items;
      setCalls(calls);
    } catch (error) {
      console.log("Error fetching Calls", error);
    }
  }
  async function calcCost() {
    var i;
    for (i = 0; i < calls.length; i++) {
      const start = calls[i].startTimeStamp;
      const end = calls[i].endTimeStamp;
      const duration = end - start;
      const minutes = duration / 60;
      console.log(minutes);
      const type = calls[i].CallType;
      if (type == "MOBILE") {
        const cost = minutes * plan.mobileRate;
        const roundedCost = cost.toFixed(2);

        costs[i] = roundedCost;
      } else if (type == "LANDLINE") {
        const cost = minutes * plan.landlineRate;
        const roundedCost = cost.toFixed(2);
        costs[i] = roundedCost;
      } else if (type == "INTERNATIONAL") {
        const cost = minutes * plan.internationalRate;
        const roundedCost = cost.toFixed(2);
        costs[i] = roundedCost;
      } else if (type == "PREMIUM") {
        const cost = minutes * plan.premiumRate;
        const roundedCost = cost.toFixed(2);
        costs[i] = roundedCost;
      } else {
        console.log("Cannot determine call type");
      }
    }
    console.log(costs);
  }
  return (
    <Container fluid>
      <BpNav />

      <Col>
        <div class="jumbotron justify-content-center">
          <Row>
            <table class="table table-bordered" onLoad={calcCost()}>
              <thead>
                <tr>
                  <th scope="col">Call ID</th>

                  <th scope="col">Number Called</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Call Type</th>
                  <th scope="col">Costs</th>
                </tr>
              </thead>
              {calls.map((call, index) => (
                <tbody>
                  <tr key={call.id ? call.id : index}>
                    <td colSpan="1">{call.id}</td>

                    <td colSpan="1">{call.NumCalled}</td>
                    <td colSpan="1">{call.StartTime}</td>
                    <td colSpan="1">{call.EndTime}</td>
                    <td colSpan="1">{call.CallType}</td>

                    <td colSpan="1">{costs[index]}</td>
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

export default BpCalls;
