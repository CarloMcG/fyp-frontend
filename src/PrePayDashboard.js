import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import awsExports from "./aws-exports";
import Auth from "@aws-amplify/auth";
import Container from "react-bootstrap/Container";
import { Circle } from "rc-progress";
import PpNav from "./BpNav";

import { listCalls } from "./graphql/queries";
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

const PpDashboard = () => {
  const [planDetails, setPlanDetails] = useState(planProps);
  const [calls, setCalls] = useState([]);
  const [total, setTotal] = useState([]);
  useEffect(() => {
    fetchPlans();
    fetchCalls();
  }, []);

  async function fetchPlans() {
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
        setPlanDetails(plan);
      }
    } catch (error) {
      console.log("error fetching plans", error);
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

  async function getTime() {
    var mobile = 0;
    var landline = 0;
    var international = 0;
    var premium = 0;
    var i;
    for (i = 0; i < calls.length; i++) {
      const type = calls[i].CallType;
      const start = calls[i].startTimeStamp;
      const end = calls[i].endTimeStamp;
      const duration = end - start;

      if (type == "MOBILE") {
        mobile = mobile + duration;
      } else if (type == "LANDLINE") {
        landline = landline + duration;
      } else if (type == "INTERNATIONAL") {
        international = international + duration;
      } else if (type == "PREMIUM") {
        premium = premium + duration;
      } else {
        console.log("Cannot determine call type");
      }
      total[0] = mobile;
      total[1] = landline;
      total[2] = international;
      total[3] = premium;

      // for the graphs
      total[4] = (mobile / planDetails.mobileMinutes) * 100;
      total[5] = (landline / planDetails.landlineMinutes) * 100;
      total[6] = (international / planDetails.internationalMinutes) * 100;
      total[7] = (premium / planDetails.premiumMinutes) * 100;
    }
  }

  return (
    <Container fluid>
      <PpNav />
      <div class="row justify-content-center" onLoad={getTime()}>
        <div class="jumbotron vertical-center row justify-content-center">
          <div class="card-group ">
            <div class="card ">
              <h6 class="card-header">Mobile Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent={total[4]}
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">
                  {total[0]}/{planDetails.mobileMinutes}
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">Landline Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent={total[5]}
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">
                  {total[1]}/{planDetails.landlineMinutes}
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">International Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent={total[6]}
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">
                  {total[2]}/{planDetails.internationalMinutes}
                </h6>
              </div>
            </div>

            <div class="card">
              <h6 class="card-header">Premium Rate Minutes:</h6>
              <div class="card-body">
                <Circle
                  percent={total[7]}
                  strokeWidth="6"
                  trailwidth="8"
                  strokeColor="#03DAC5"
                  class="linear"
                />
                <h6 class="card-text row justify-content-center">
                  {total[3]}/{planDetails.premiumMinutes}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PpDashboard;
