import React from "react";
import Container from "react-bootstrap/Container";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import AdminNav from "./AdminNav";
function aDashboard() {
  return (
    <Container fluid>
      <AdminNav />
      <div class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <div class="card-group ">
            <div class="card ">
              <h6 class="card-header">Users:</h6>
              <div class="card-body ">
                <h1 class="card-text row justify-content-center">120</h1>
                <h6 class="card-text row justify-content-center">
                  Current Users
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">PrePay Plans:</h6>
              <div class="card-body">
                <h1 class="card-text row justify-content-center">36</h1>
                <h6 class="card-text row justify-content-center">
                  Active PrePay Plans
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">BillPay Plans:</h6>
              <div class="card-body">
                <h1 class="card-text row justify-content-center">46</h1>
                <h6 class="card-text row justify-content-center">
                  Active BillPay Plans
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header ">Minutes Used this month:</h6>
              <div class="card-body">
                <h1 class="card-text row justify-content-center">3600</h1>
                <h6 class="card-text row justify-content-center">
                  Minutes used
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default aDashboard;
