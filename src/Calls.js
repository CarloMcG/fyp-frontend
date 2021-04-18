import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listCalls, listUsers } from "./graphql/queries";
import { AmplifySignOut } from "@aws-amplify/ui-react";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
const Calls = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetchCalls();
  }, []);

  async function fetchCalls() {
    try {
      const callData = await API.graphql(graphqlOperation(listCalls));
      const calls = callData.data.listCalls.items;
      setCalls(calls);
    } catch (error) {
      console.log("Error fetching Calls");
    }
  }
  return (
    <Container fluid>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/CustomerDashboard">
          TelecomsCorp
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/CustomerDashboard">
                Dashboard
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/Bills">
                Calls<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Bills">
                Bills<span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/PayBill">
                Pay a bill
              </a>
            </li>
          </ul>
        </div>
        <div class=" float-right">
          <AmplifySignOut />
        </div>
      </nav>
      <Col>
        <div class="jumbotron justify-content-center">
          <Row>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Call ID</th>
                  <th scope="col">Number Calling</th>
                  <th scope="col">Number Called</th>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Call Type</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
              {calls.map((call, index) => (
                <tbody>
                  <tr ley={call.id ? call.id : index}>
                    <td colSpan="1">{call.id}</td>
                    <td colSpan="1">{call.NumCalling}</td>
                    <td colSpan="1">{call.NumCalled}</td>
                    <td colSpan="1">{call.StartTime}</td>
                    <td colSpan="1">{call.EndTime}</td>
                    <td colSpan="1">{call.CallType}</td>
                    <td colSpan="1">{call.Cost}</td>
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

export default Calls;