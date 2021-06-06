import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listCalls } from "./graphql/queries";
import BpNav from "./BpNav";
import { listPlans } from "./graphql/queries";
import Form from "react-bootstrap/Form";
import Auth from "@aws-amplify/auth";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = {
  Month: "",
  Year: "",
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

const Bills = () => {
  const [formState, setFormState] = useState(initialState);
  const [calls, setCalls] = useState([]);
  const [plan, setPlan] = useState(planProps);
  const [costs, setCosts] = useState([]);

  useEffect(() => {
    fetchPlan();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchPlan() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const name = user.signInUserSession.accessToken.payload["username"];
      let planFilter = {
        Users: {
          contains: name,
        },
      };
      const planData = await API.graphql(
        graphqlOperation(listPlans, { filter: planFilter })
      );

      const plan = planData.data.listPlans.items[0];
      if (plan) {
        setPlan(plan);
      }
    } catch (error) {
      console.log("Error fetching Plan", error);
    }
  }

  async function fetchCalls(e) {
    try {
      e.preventDefault();
      const planDate = formState.Year.concat("-", formState.Month);
      let callFilter = {
        StartTime: {
          contains: planDate,
        },
      };
      const callData = await API.graphql(
        graphqlOperation(listCalls, { filter: callFilter })
      );

      const calls = callData.data.listCalls.items;
      setCalls(calls);
      console.log(calls);
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
  }
  return (
    <Container fluid>
      <BpNav />
      <div class="cForm">
        <Form>
          <select
            class="form-control form-fixer"
            onChange={(event) => setInput("Month", event.target.value)}
            value={formState.Month}
          >
            <option value="NULL">Month</option>
            <option value="01">January</option>
            <option value="02">Febuary</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>

          <select
            class="form-control form-fixer"
            onChange={(event) => setInput("Year", event.target.value)}
            value={formState.Year}
          >
            <option value="NULL">Year </option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <button onClick={fetchCalls} class="btn btn-primary btn-lg active">
            Generate Bill
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default Bills;
