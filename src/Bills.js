import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listBills } from "./graphql/queries";
import BpNav from "./BpNav";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const Bills = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchBills();
  }, []);

  async function fetchBills() {
    try {
      const billData = await API.graphql(graphqlOperation(listBills));
      const bills = billData.data.listBills.items;
      setBills(bills);
    } catch (error) {
      console.log("Error fetching Bills");
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
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              {bills.map((bill, index) => (
                <tbody>
                  <tr key={bill.id ? bill.id : index}>
                    <td colSpan="1">{bill.StartDate}</td>
                    <td colSpan="1">{bill.EndDate}</td>
                    <td colSpan="1">{bill.Amount}</td>
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

export default Bills;
