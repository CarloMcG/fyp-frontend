import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import BpNav from "./BpNav";
function bills() {
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
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </Row>
        </div>
      </Col>
    </Container>
  );
}

export default bills;
