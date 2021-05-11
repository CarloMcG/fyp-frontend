import React, { useEffect, useState } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import awsExports from "./aws-exports";
import Auth from "@aws-amplify/auth";
import Container from "react-bootstrap/Container";
import { Circle } from "rc-progress";
import BpNav from "./BpNav";
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

const BpDashboard = () => {
  const [planDetails, setPlanDetails] = useState(planProps);
  useEffect(() => {
    fetchPlans();
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
      console.log(plan);
      if (plan) {
        setPlanDetails(plan);
      }
      //    totalCalc();
    } catch (error) {
      console.log("error fetching plans", error);
    }
  }

  /* Come back to this later
   New setState, same as above
   Need to sort out bills first
   Per Period
  async function totalCalc() {
    // Mobile Minutes Remaining
    const mobUsed = 123;
    const mobTot = planDetails.mobileMinutes;
    const mobPerc = mobUsed / mobTot;
    console.log(mobPerc);
  }
  */
  return (
    <Container fluid>
      <BpNav />
      <div class="row justify-content-center">
        <div class="jumbotron vertical-center row justify-content-center">
          <div class="card-group ">
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
                <h6 class="card-text row justify-content-center">
                  120/{planDetails.mobileMinutes}
                </h6>
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
                <h6 class="card-text row justify-content-center">
                  120/{planDetails.landlineMinutes}
                </h6>
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
                <h6 class="card-text row justify-content-center">
                  120/{planDetails.internationalMinutes}
                </h6>
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
                <h6 class="card-text row justify-content-center">
                  120/{planDetails.premiumMinutes}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BpDashboard;
