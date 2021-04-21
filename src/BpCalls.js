import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listCalls } from "./graphql/queries";
import BpNav from "./BpNav";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
const BpCalls = () => {
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
      <BpNav />
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
                  <tr key={call.id ? call.id : index}>
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

export default BpCalls;
