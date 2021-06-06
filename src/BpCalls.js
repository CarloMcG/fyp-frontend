import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listCalls } from "./graphql/queries";
import BpNav from "./BpNav";
import { listPlans } from "./graphql/queries";
import Form from "react-bootstrap/Form";
import Pdf from "react-to-pdf";
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

const totProps = {
  total: "",
};

const ref = React.createRef();
const options = {
  orientation: "landscape",
  unit: "in",
  format: [11.7, 20],
};

const BpCalls = () => {
  const [formState, setFormState] = useState(initialState);
  const [calls, setCalls] = useState([]);
  const [plan, setPlan] = useState(planProps);
  const [costs, setCosts] = useState([]);
  const [total, setTotal] = useState(totProps);

  useEffect(() => {
    fetchPlan();
    fetchCalls();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

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
      const planDate = formState.Year.concat("-", formState.Month);

      const callData = await API.graphql(graphqlOperation(listCalls));

      const calls = callData.data.listCalls.items;
      setCalls(calls);
      calcCost();

      console.log(calls);
    } catch (error) {
      console.log("Error fetching Calls", error);
    }
  }

  async function filterCalls(e) {
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
      calcCost();
    } catch (error) {
      console.log("Error fetching Calls", error);
    }
  }
  async function calcCost() {
    var i;
    var tot = 0.0;
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

      var current = parseFloat(costs[i]);
      tot += current;
      console.log(current);
    }
    const total = tot.toFixed(2);
    totProps.total = total;
  }

  return (
    <Container fluid>
      <BpNav />
      <Pdf targetRef={ref} options={options} filename="Bill.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            class="btn btn-primary btn-lg active float-right"
          >
            Generate Bill
          </button>
        )}
      </Pdf>
      <Form class="filterForm">
        <Row>
          <Col>
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
          </Col>
          <Col>
            <select
              class="form-control form-fixer"
              onChange={(event) => setInput("Year", event.target.value)}
              value={formState.Year}
            >
              <option value="NULL">Year </option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </Col>
          <Col>
            <button onClick={filterCalls} class="btn btn-primary btn-lg active">
              Filter
            </button>
          </Col>
        </Row>
      </Form>

      <Col>
        <div class="jumbotron justify-content-center" ref={ref}>
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
          <h1 class="float-right">Total Cost: €{totProps.total}</h1>
        </div>
      </Col>
    </Container>
  );
};

export default BpCalls;
