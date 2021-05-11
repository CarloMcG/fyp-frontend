import React, { useEffect } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import { useHistory } from "react-router-dom";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { listPlans } from "./graphql/queries";
import awsExports from "./aws-exports";
import Auth from "@aws-amplify/auth";

Amplify.configure(awsExports);

const PpNav = () => {
  let history = useHistory();

  useEffect(() => {
    setAuthListener();
    fetchPlans();
  }, []);

  async function setAuthListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          console.log("user signed In");
          break;
        case "signUp":
          console.log("user signed up");
          break;
        case "signOut":
          console.log("user signed out");
          history.push("/");
          break;
        case "signIn_failure":
          console.log("user sign in failed");
          break;
        case "tokenRefresh":
          console.log("token refresh succeeded");
          break;
        case "tokenRefresh_failure":
          console.log("token refresh failed");
          break;
        case "configured":
          console.log("the Auth module is configured");
          break;
        default:
          break;
      }
    });
  }

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
      console.log(planData);
    } catch (error) {
      console.log("error fetching plans");
    }
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/PrePayDashboard">
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
            <a class="nav-link" href="/PrePayDashboard">
              Dashboard<span class="sr-only">(current)</span>
            </a>
          </li>{" "}
          <li class="nav-item">
            <a class="nav-link " href="/PpCalls">
              Calls
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/TopUp">
              TopUp
            </a>
          </li>
        </ul>
      </div>
      <div class=" float-right">
        <AmplifySignOut />
      </div>
    </nav>
  );
};

export default PpNav;
