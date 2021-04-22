import React, { useEffect, useState } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import Auth from "@aws-amplify/auth";
import { Hub } from "aws-amplify";
import { useHistory } from "react-router-dom";

const PpNav = () => {
  let history = useHistory();

  useEffect(() => {
    setAuthListener();
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

  return (
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
