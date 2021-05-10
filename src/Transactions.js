import React from "react";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import PpNav from "./PpNav";
function transactions() {
  return (
    <Container fluid>
      <PpNav />

      <Col>
        <div class="jumbotron justify-content-center">
          <Row>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col"> Date</th>
                  <th scope="col">Time</th>
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

export default transactions;
