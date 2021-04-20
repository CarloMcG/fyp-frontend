import React from "react";
import Container from "react-bootstrap/Container";
import { Circle } from "rc-progress";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import PpNav from "./PpNav";
function PpDashboard() {
  return (
    <Container fluid>
      <PpNav />
      <div class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <div class="card-group ">
            <div class="card">
              <h6 class="card-header">Current Balance:</h6>
              <div class="card-body">
                <h1>€100.00</h1>
              </div>
            </div>
            <div class="card ">
              <h6 class="card-header">Mobile Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">Landline Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">International Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">Premium Rate Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent="10"
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">120/360</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PpDashboard;
