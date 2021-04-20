import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import API from "@aws-amplify/api";
import Auth from "@aws-amplify/auth";

const Api = () => {
  const group = useState();

  async function getGroup() {
    const user = await Auth.currentAuthenticatedUser();
    const group = user.signInUserSession.accessToken.payload["cognito:groups"];
    console.log(group);
    if (group == "admin") {
      console.log("success 1");
    } else if (group == "billpay") {
      console.log("success 2");
    } else if (group == "prepay") {
      console.log("success 3");
    } else {
      console.log("Error");
    }
  }

  return <h1>Did it work?</h1>;

  getGroup();
};

export default Api;
